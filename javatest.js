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
});