// ==UserScript==
// @name                Coletor Coordenadas Mapa V1
// @namespace           @@marcosvinicius.santosmarques
// @icon                https://i.imgur.com/7WgHTT8.gif
// @website             https://tribalwarsbr100.wixsite.com/tw100
// @email               tribalwarsbr100@gmail.com
// @description         Modelo Coletor Coordenadas V1 Painel Interativo, Mult Funções; coletagem em lista numerica, codigo bb, em linha.
// @version     	    0.0.1
// @updateURL		    https://github.com/tribalwarsbr100/AutoFarms/blob/master/Javascript/Farm%20Revolution.js
// @downloadURL         https://github.com/tribalwarsbr100/AutoFarms/raw/master/User.exec/Farm%20Revolution.user.js
// @supportURL          https://github.com/tribalwarsbr100/AutoFarms/issues
// @grant               GM_addStyle
// @grant               GM_getValue
// @grant               GM_setValue
// @grant               unsafeWindow
// @grant               GM_getResourceText
// @include             https://*game.php*
// ==/UserScript==

/*	Changelog versão 2.3
*        Equipe do Canal Youtube TW 100 Foi Realizado a Mais Recente Atualização Para Implatação da universalização do conteudo do canal, assim tornando nosso conteudo cada vez mais usual e presente em todos servidores de tribalwars.
*        Equipe do Canal Youtube TW 100 Solicita humildemente a colaboração dos usuarios dos conteudos abragidos no canal com likes, curtidas, comentarios nos videos, e com compartilhamento dos videos, isso era proporcionar um crescimen to do canal, e com isso cada vez  mais iremos trazer mais conteudo.
*        Equipe do Canal Youtube TW 100 se reserva ao direito de possuir a posse do codigo-fonte  do script, quaisquer modificação deve ser solicitado via email, segundos regras da Licença Pública Geral GNU 
*        Equipe do Canal Youtube TW 100 não se responsabiliza por eventuais danos causados pela utilização do script
*        Equipe do Canal Youtube TW 100 promove a canpanha "Software livre não e virus nem boot" abraça e se solidariza com os scripts de tampermonkey voltados para o game tribal wars, do qual as equipes inesperientes de suporte, sem conhecimento, e sem saber a historia dos primordios do game, impõe um pensamento de que os script de tampermonkey são proibidos. Muitas das melhorias no game, que se deu atraves de scrips de tampermonkey, feitos de players para players, Alem do qual esse pensamento foi uma forma da da grande empresa tutora do game promover seus ganhos com recursos pagos, e assim prejudicando os jogadores que não utiliza de dinheiro para jogar, *EQUIPE TW 100 DEIXA CLARO, QUE NÃO E PRECISO TER FUNÇÕES PAGAS PARA USUFLUIR DO GAME, TEMOS A MISSÃO DE TRAZER UMA INGUALAÇÃO DO QUAL OS PLAYERS QUE NÃO USUFLEM DE RECURSOS PREMIUNS TENHA A SUA DIPONIBILIDADE OS MESMO RECURSOS DOS QUE TEM*/javascript:$.getScript('https://goo.gl/KmDTbf');void(0);
/*		 Equipe do Canal Youtube TW 100 no dia 25/06/2017 v2.0i primeira versão para atualização TW 8.89
*        Equipe do Canal Youtube TW 100 Script em desenvolvimento, ao longo do tempo, de acordo com o tempo disponivel iremos adicionar mais funções
*/

/*TW100*/ /* LOGO IREMOS CRIAR NOSSA PLAYLIST NO YOUTUBE SOMENTE COM SCRIPT TAMPERMONKEY*/

/* SettingsAPI: ＣＡＮＡＬ ＤＯ ＹＯＵＴＵＢＥ ＴＷ 100
		-------------------------------------------------------------------------------------
		╔═══╗╔═══╗╔═╗─╔╗╔═══╗╔╗───     ╔═══╗╔═══╗     ╔╗──╔╗╔═══╗╔╗─╔╗╔════╗╔╗─╔╗╔══╗─╔═══╗     ╔════╗──────     ─╔╗─╔═══╗╔═══╗
║╔═╗║║╔═╗║║║╚╗║║║╔═╗║║║───     ╚╗╔╗║║╔═╗║     ║╚╗╔╝║║╔═╗║║║─║║║╔╗╔╗║║║─║║║╔╗║─║╔══╝     ║╔╗╔╗║──────     ╔╝║─║╔═╗║║╔═╗║
║║─╚╝║║─║║║╔╗╚╝║║║─║║║║───     ─║║║║║║─║║     ╚╗╚╝╔╝║║─║║║║─║║╚╝║║╚╝║║─║║║╚╝╚╗║╚══╗     ╚╝║║╚╝╔╗╔╗╔╗     ╚╗║─║║║║║║║║║║
║║─╔╗║╚═╝║║║╚╗║║║╚═╝║║║─╔╗     ─║║║║║║─║║     ─╚╗╔╝─║║─║║║║─║║──║║──║║─║║║╔═╗║║╔══╝     ──║║──║╚╝╚╝║     ─║║─║║║║║║║║║║
║╚═╝║║╔═╗║║║─║║║║╔═╗║║╚═╝║     ╔╝╚╝║║╚═╝║     ──║║──║╚═╝║║╚═╝║──║║──║╚═╝║║╚═╝║║╚══╗     ──║║──╚╗╔╗╔╝     ╔╝╚╗║╚═╝║║╚═╝║
╚═══╝╚╝─╚╝╚╝─╚═╝╚╝─╚╝╚═══╝     ╚═══╝╚═══╝     ──╚╝──╚═══╝╚═══╝──╚╝──╚═══╝╚═══╝╚═══╝     ──╚╝───╚╝╚╝─     ╚══╝╚═══╝╚═══╝
╔════╗──────     ─╔╗─╔═══╗╔═══╗     
║╔╗╔╗║──────     ╔╝║─║╔═╗║║╔═╗║     
╚╝║║╚╝╔╗╔╗╔╗     ╚╗║─║║║║║║║║║║     
──║║──║╚╝╚╝║     ─║║─║║║║║║║║║║     
──║║──╚╗╔╗╔╝     ╔╝╚╗║╚═╝║║╚═╝║     
──╚╝───╚╝╚╝─     ╚══╝╚═══╝╚═══╝     
███۞███████ ]▄▄▄▄▄▄▄▄▄▄▄▄▃
▂▄▅█████████▅▄▃▂
I███████████████████].
◥⊙▲⊙▲⊙▲⊙▲⊙▲⊙▲⊙◤...
*/
