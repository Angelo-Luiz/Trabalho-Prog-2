<!doctype html>
<html lang="pt=br">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Cadastro Usuário</title>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.min.js"
        integrity="sha384-ODmDIVzN+pFdexxHEHFBQH3/9/vQ9uori45z4JjnFsRydbmQbmL5t1tQ0culUzyK"
        crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <link href="estilos/style.css" rel="stylesheet">

</head>

<body>

    <!--NAVBAR-->
    <nav class="navbar navbar-expand-lg">

        <div class="container">
            <a class="navbar-brand" href="index.html">Minha Página</a>

            <!--    BOTAO TOGGLER   -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">

                <span class="navbar-toggler-icon"></span>
            </button>


            <div class="collapse navbar-collapse" id="navbarNavDropdown">

                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Sobre</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Músicas</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Login</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Aplicações</a>
                        <!--    DROPDOWN APLICAÇÕES -->
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">

                            <li><a class="dropdown-item" href="jogodaVelha.html">Jogo da Velha</a></li>
                            <li><a class="dropdown-item" href="Calculadora.html">Calculadora</a></li>

                        </ul>
                    </li>
                </ul>
            </div>
        </div>

    </nav>
    <!--\NAVBAR-->

    <!--    SEÇAO DE CONTEUDO   -->
    <section class="container modelo">
       <?php 

        $nome = $_POST["nomecompleto"];
        $email = $_POST["email"];
        $senha = $_POST["pass"];
        $data = $_POST["data"];
        
        $tabela = '<table class="tabela-php">';
        $tabela .= '<tr>';
        $tabela .= '<td colspan="2"> Dados Usuario </td>';
        $tabela .= '</tr>';
        $tabela .= '<tr><td>Nome Completo </td> <td>' .$nome .' </td></tr>';
        $tabela .= '<tr><td> Email </td> <td> ' .$email .'</td></tr>';
        $tabela .= '<tr><td> Senha </td> <td> ' .$senha .'</td></tr>';
        $tabela .= '<tr><td> Data de Nascimento </td> <td> ' .$data .'</td></tr>';
        $tabela .= '</table>';

        echo '<h2>Seja Bem Vindo, </h2>';
        echo '<h3>'. $nome. '</h3>';
        echo $tabela;
        
        

       ?>
        
    </section>


    <footer class="rodape">
        <div class="container">
            <div class="row">
                <div class="col-md-5 col-sm-4"></div>
                <div class="col-md-2 col-sm-5 icones-sociais">
                    <ul>
                        <li><a href="https://www.facebook.com/angelo.franz.3/"><img src="imagens/facebook.png"></a></li>
                        <li class="divisor"></li>
                        <li><a href="https://www.instagram.com/angelooluiz/"><img src="imagens/instagram.png"></a></li>
                    </ul>
                </div>

                <div class="col-md-5 col-sm-5"></div>

            </div>
        </div>
    </footer>


    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
        crossorigin="anonymous"></script>
</body>

</html>