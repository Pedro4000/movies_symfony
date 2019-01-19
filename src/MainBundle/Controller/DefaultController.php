<?php

namespace MainBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\FormType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Session\Session;

use MainBundle\Entity\users;
use MainBundle\Entity\favourite;
use MainBundle\Entity\comments;


class DefaultController extends Controller
{
    public function indexAction()
    {
        return $this->render('MainBundle:Default:index.html.twig');
    }


        public function moviesAction()
    {
        return $this->render('MainBundle:Default:movies.html.twig');;
    }


        public function registerAction(Request $request)
    {

        $user = new users();

        $formBuilder =$this -> get('form.factory')->createBuilder(Formtype::class,$user);

        $formBuilder
            ->add('firstname', TextType::class)
            ->add('familyname', TextType::class)
            ->add('email', TextType::class)
            ->add('password', TextType::class)
            ->add('submit',      SubmitType::class);

        $form= $formBuilder->getForm();


        if ($request->isMethod('POST')) 
        {
            $form->handleRequest($request);


            if ($form->isValid()){

                $em = $this -> getDoctrine()->getManager();

                $em->persist ($user);
                $em->flush();

                $request->getSession()->getFlashBag()->add('notice', 'Your account has successfully been created');

                return $this->redirectToRoute('main_homepage');

            }

        }

            return $this->render('MainBundle:Default:register.html.twig', array('form'=>$form->createView()));


    }


        public function loginAction(Request $request)
    {

        $user= new users;
        $formBuilder =$this -> get('form.factory')->createBuilder(Formtype::class,$user);

        $formBuilder
            ->add('email', TextType::class)
            ->add('password', TextType::class)
            ->add('submit',      SubmitType::class);

        $form= $formBuilder->getForm();

        if ($request->isMethod('POST')) 
        {
            $form->handleRequest($request);


            if ($form->isValid())
            {
                $usermail=$user->getEmail();
                $userpassword=$user->getPassword();

                $em = $this->getDoctrine()
                  ->getManager();
                $repo=$em->getRepository('MainBundle:users');

                $userbase=$repo->findOneBy(array('email'=>$usermail));

                if (isset($userbase))
                 { 

                    $modepa=$userbase->getPassword();
                    var_dump($modepa,$userpassword);
                    if ($modepa===$userpassword) {
                        var_dump('le code est bon');

                        var_dump($userbase);

                        $session = new Session();
                        $session->invalidate();
                        $session->start();

                        $session->set('id',$userbase->getId());
                        $session->set('firstName',$userbase->getFirstName());
                        $session->set('email',$userbase->getEmail());

                        var_dump($session->get('id'),$session->get('firstName'),$session->get('email'));
                    }


       
                }


                return $this->render('MainBundle:Default:login.html.twig', array(
                    'form'=>$form->createView(),
                    'user'=>$user));



            

            }
        
        }
        return $this->render('MainBundle:Default:login.html.twig', array(
            'form'=>$form->createView()));


    }

            public function logoutAction()
    {
        return $this->render('MainBundle:Default:logout.html.twig');
    }


            public function favouriteAction()
    {
        return $this->render('MainBundle:Default:favourite.html.twig');
    }

}
