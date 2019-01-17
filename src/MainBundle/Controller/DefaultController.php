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

use MainBundle\Entity\users;


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

                return $this->redirectToRoute('main_homepage', array('id'=>$user->getId()));

            }

        }

            return $this->render('MainBundle:Default:register.html.twig', array('form'=>$form->createView()));


            }



}
