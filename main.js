$(function(){
    $(".container").hide();
    $(".tabela").hide();
    $('#unos').click(function(){
        $(".tabela").hide();
        $(".container").show()
    })
    $('#test1').blur(function(){
        if($(this).val() > 26 || $(this).val() == '') {
            alert('U ovo polje unesite brojeve iz opsega 0 - 25')
        }
    })
    $('#test2').blur(function(){
        if($(this).val() > 26 || $(this).val() == '') {
            alert('U ovo polje unesite brojeve iz opsega 0 - 25')
        }
    })
    $('#projekat').blur(function(){
        if($(this).val() > 51 || $(this).val() == '') {
            alert('U ovo polje unesite brojeve iz opsega 0 - 50')
        }
    })
   
    const sampleName = /^[A-ZŠĐČĆŽ][a-zšđčćž]{1,13}(\s[A-ZŠĐČĆŽ][a-zšđčćž]{1,13})+$/; 
    function Studenti(ime, test1, test2, projekat) {
        this.ime = ime;
        this.test1 = test1;
        this.test2 = test2;
        this.projekat = projekat;
        this.ukupnoBodova = this.test1 + this.test2 + this.projekat;
    }

    let nekistudent = new Studenti('pera', 25, 25, 50)
    console.log(nekistudent)

    let nizStudenata = []
    $('#sacuvaj').click(function(){
        
        if(sampleName.test($('#ime').val()) && $('#test1').val() != '' && $('#test2').val() != '' && $('#projekat').val() != '') {
            nizStudenata.push(new Studenti($('#ime').val(), +$('#test1').val(), +$('#test2').val(), +$('#projekat').val()));
            nizStudenata.sort(function(a,b) {
                return b.ukupnoBodova - a.ukupnoBodova;
            })
            $('input[type="text"]').val('')
        console.log(nizStudenata)
        } else (
            alert('Molimo Vas da popunite sva polja!')
        )
    })

    $('#prikaz').click(function(){
        $('tbody').empty();
        $(".container").hide();
        $(".tabela").show();

        for(let i = 0; i < nizStudenata.length; i++) {
            $('tbody').append(`<tr><td>${nizStudenata[i].ime}</td><td>${nizStudenata[i].test1}</td><td>${nizStudenata[i].test2}</td><td>${nizStudenata[i].projekat}</td><td>${nizStudenata[i].ukupnoBodova}</td></tr>`);
            $('tr:eq(' + i+1 + ')').attr('id', 'id'+i)
            if (nizStudenata[i].ukupnoBodova >= 80) {
                $('#id'+i).css('background-color', 'yellow')
            }
            if (nizStudenata[i].ukupnoBodova >= 55 && nizStudenata[i].ukupnoBodova <= 80) {
                $('#id'+i).css('background-color', 'green')
            } else {
                $('#id'+i).css('background-color', 'red')
            }
        }

        
        
    })
})