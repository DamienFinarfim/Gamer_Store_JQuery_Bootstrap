function valida_cpf(cpf){
   var numeros, digitos, soma, i, resultado, digitos_iguais;
   digitos_iguais = 1;
   if (cpf.length < 11)
         return false;
   for (i = 0; i < cpf.length - 1; i++)
         if (cpf.charAt(i) != cpf.charAt(i + 1))
               {
               digitos_iguais = 0;
               break;
               }
   if (!digitos_iguais)
         {
         numeros = cpf.substring(0,9);
         digitos = cpf.substring(9);
         soma = 0;
         for (i = 10; i > 1; i--)
               soma += numeros.charAt(10 - i) * i;
         resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
         if (resultado != digitos.charAt(0))
               return false;
         numeros = cpf.substring(0,10);
         soma = 0;
         for (i = 11; i > 1; i--)
               soma += numeros.charAt(11 - i) * i;
         resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
         if (resultado != digitos.charAt(1))
               return false;
         return true;
         }
   else
         return false;
}

$(document).ready(function(){

   $('.owl-carousel').owlCarousel();
   let titulos = $('h4')
   let itens = $('.featured-item')
   let destaques = $('#featured')
   console.log(titulos.first());

   $('.featured-item a').addClass('btn btn-dark stretch-link');

   $('.featured-item:first h4').append('<span class="badge bg-secondary">Produto Novo</span>')
   // $('.featured-item:first h4').start('<span class="badge bg-secondary">Novo</span>')
   // $('.featured-item:first h4').html('<span class="badge bg-secondary">Novo</span>')
   // $('.featured-item:first h4').addClass('active')
   // $('.featured-item:first h4').removeClass('active')
   // $('.featured-item:first h4').toggleClass('active')
   // $('.featured-item:first h4').hide()
   // $('.featured-item:first h4').show()
   // $('.featured-item:first h4').fadeIn(2000)
   // $('.featured-item:first h4').fadeOut()
   // $('.featured-item:first h4').css('color', '#f00')
     
      $('.featured-item h4').dblclick( function(){

         $(this).css({
            'color': '#f00',
            'background': '#ff0',
            'font-weight': '100',
         });
      });

   $('.featured-item a').on('blur', function(event){

      event.preventDefault();
      alert('Produto esgotado');
   })

   $('.featured-item:nth(1)')
      .hide(500, function(){
      console.log( $(this).find('h4').text() + ' esgotado')
      })
      .show(500, function(){
      console.log( $(this).find('h4').text() + ' em estoque')
      })

   const duracao = 1000
   $('.featured-item:nth(0)')
      .hide(duracao)
      .show(duracao)
      .fadeOut(duracao)
      .fadeIn(duracao)
      .toggle(duracao)
      .toggle(duracao)

   $('#form-submit').on('click', function(e){
      e.preventDefault()
      if($('#email').val() != '' ){
         $('#email').animate({
            opacity: "toggle",
            top: "-50"
         }, duracao, function(){
            console.log($(this).val())
         })
      }  

   });

   $('.nav-modal-open').on('click', function(e){
      e.preventDefault();
      let elem = $(this).attr('rel')
      $('.modal-body').html($('#'+elem).html())
      $('.modal-header h5.modal-title').html($(this).text())
      let myModal = new bootstrap.Modal($('#modelId'))
      myModal.show()

   })

   function validate(elem){
      if(elem.val() == ''){
         console.log('o campo de '+ elem.attr('name') + ' é obrigatório')
         elem.parent().find('.text-muted').show()
         elem.addClass('invalid')
         return false
      }else{
         elem.parent().find('.text-muted').hide()
         elem.removeClass('invalid')
      }
   }

   $('body').on('submit', '.modal-body .form', function(e){

      e.preventDefault()

      const inputName = $('#nome')
      const inputEmail = $('#email')
      

      validate(inputName)
      validate(inputEmail)
     

      if(inputName.hasClass('invalid') || inputEmail.hasClass('invalid')){
         console.log('verificar campos obrigatórios')
         return false
      }else{
         $(this).submit()
      }

   })

   $('body').on('blur', '#nome', function(){
      validate($(this))
   })

   $('body').on('blur', '#email', function(){
      validate($(this))
   })

   $('body').on('focus', '#date', function(){
      $(this).datepicker()
   })

   $('body').on('blur', '#date', function(){
      validate($(this))
      $('#date').mask('00/00/0000');
   })

   $('body').on('blur', '#time', function(){
      validate($(this))
      $('#time').mask('00:00');
   })

   $('body').on('blur', '#cep', function(){
      validate($(this))
      $('#cep').mask('00000-000');
   })
   
   $('body').on('blur', '#phone', function(){
      validate($(this))
      $('#phone').mask('00000-0000');
   })
})