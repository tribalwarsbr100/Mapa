if (game_data.screen != 'map')
{
        UI.InfoMessage('Canal :> #TW 100# Entre no Mapa, Para Visualizar Aldeias Bonus.', 3000, true);
        end();
}

setInterval(function ()
{

        $("#map_container div:not('.map_border') img[id^='map_cmdicons']")
                .remove();
        $("#map_container div:not('.map_border') img[id^='map_icons']")
                .remove();

        aldeiasEsconder = ['b1.png', 'b2.png', 'b3.png', 'b4.png', 'b5.png', 'b1_left.png', 'b2_left.png', 'b3_left.png', 'b4_left.png'
                , 'b5_left.png'];

        $("#map_container div:not('.map_border') img[id^='map_village']")
                .each(function (i, e)
                {

                        src = $(e)
                                .attr('src');
                        remover = true;

                        aldeiasEsconder.forEach(function (valor)
                        {

                                if (src.indexOf(valor) > 0)
                                {
                                        remover = false;
                                }

                        });

                        if (remover)
                        {
                                $(e)
                                        .remove();
                        }

                });
}, 1);
