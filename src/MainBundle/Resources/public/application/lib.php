<?php

// application/lib.php

function hashPassword($password)
    {
       
        $salt = '$2y$11$'.substr(bin2hex(openssl_random_pseudo_bytes(32)), 0, 22);

        // Voir la documentation de crypt() : http://devdocs.io/php/function.crypt
        return crypt($password, $salt);
    }

function verifyPassword($password, $hashedPassword)
{
        // Si le mot de passe en clair est le même que la version hachée alors renvoie true.
        return crypt($password, $hashedPassword) == $hashedPassword;
}

?>