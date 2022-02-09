$(document).ready(function () {

    $('#search-btn').click(function (event) {
        event.preventDefault();
        let search = $('#search-text').val();
        $.ajax({
            url: "handler.php",
            cache: false,
            dataType: "json",
            method: "POST",
            data: {
                search: search,
            }
        }).done(function (result) {
            // console.log(result);
            $('#search-result').empty();
            $.each(result.results, function (key, val) {
                let spell_name = val.name;
                let spell_url = val.url;
                let detail_url = "https://www.dnd5eapi.co" + spell_url;

                $.ajax({
                    url: detail_url,
                    dataType: "json"
                }).done(function (details) {
                    let spell_info = details.desc;
                    let spell_range = details.range;
                    let spell_level = details.level;

                    $('#search-result').append(
                        '<div class="card text-white bg-primary mb-3" style="max-width: 20rem;">' +
                        '<div class="card-header">' + spell_name + '</div>' +
                        '<div class="card-body" style="max-height: 20rem; overflow-y: scroll">' +
                        '<p class="card-text">' + spell_info + '</p>' +
                        '<p class="card-text"><b>Range: </b>' + spell_range + '</p>' +
                        '<p class="card-text"><b>Spell level: </b>' + spell_level + '</p>' +
                        '</div>' +
                        '</div>&nbsp;&nbsp;'
                    )
                })
            })
        })
    })


    $('#searchbutton').click(function (event) {
        event.preventDefault();
        let filtersearch = $("#search-text").val();
        let filtertype = $("#filteroption").val();
        // console.log(type);
        // console.log(search);
        $.ajax({
            url: "handler.php",
            cache: false,
            dataType: "json",
            method: "POST",
            data: {
                filtersearch: filtersearch,
                filtertype: filtertype,
            }
        }).done(function (result) {
            // console.log(result);
            $('#filter-result').empty();
            $.each(result, function (key, val) {
                // console.log(val);
                let name = val.name;
                let cr = val.cr;
                let size = val.size;
                let ac = val.ac;
                let hp = val.hp;
                let speed = val.speed;
                let vision = val.vision;
                let str = val.str;
                let dex = val.dex;
                let con = val.con;
                let breathing = val.breathing;
                let attack = val.attack;
                let combatskills = val.combatskills;
                let generalskills = val.generalskills;
                let stealth = val.stealth;
                let perception = val.perception;

                $('#filter-result').append(
                    '<div class="card mb-1" style="max-width: 25rem";>' +
                    '<div class="card-body">' +
                    '<h4 class="card-title">' + name + '</h4>' +
                    '<h6 class="card-subtitle mb-2 text-muted">' + "A CR " + cr + ", " + size + " Beast" + '</h6>' +
                    '<p class="card-text" style="max-height: 15rem; overflow-y: scroll";>' +
                    '<b>' + "AC: " + '</b>' + ac + '<br>' +
                    '<b>' + "HP: " + '</b>' + hp + '<br>' +
                    '<b>' + "Speed: " + '</b>' + speed + '<br>' +
                    '<b>' + "Senses: " + '</b>' + "Darkvision: " + vision + '<br>' +
                    "Perception: " + perception + '<br>' +
                    '<b>' + "Breathing: " + '</b>' + breathing + '<br>' +
                    stealth + " stealth" + '<br><br>' +
                    '<b>' + "STR: " + '</b>' + str + '<br>' +
                    '<b>' + "DEX: " + '</b>' + dex + '<br>' +
                    '<b>' + "CON: " + '</b>' + con + '<br><br>' +
                    '<b>' + "Attack: " + '</b>' + attack + '<br>' +
                    '<b>' + "Combat Skills: " + '</b>' + combatskills + '<br>' +
                    '<b>' + "General Skills: " + '</b>' + generalskills + '<br>' +
                    '</p></div>' +
                    '</div>&nbsp;&nbsp;'
                )
            })
        })
    })
});