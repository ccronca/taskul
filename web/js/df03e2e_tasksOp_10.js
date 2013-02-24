// Enable the file uploader
alert(1);
$(document).ready(function(){
    alert(1);
    new PunkAveFileUploader({
        'uploadUrl': {{ path('task_upload', { uploadId: editId, classId: entityClass , id: entity.id }) | json_encode | raw }},
        'viewUrl': '{{ '/uploads/tmp/attachments/' ~ editId  }}' ,
        'el': '.file-uploader',
        'existingFiles': {{ existingFiles | json_encode | raw }},
        'delaySubmitWhileUploading': '.form-horizontal',
        'errorCallback': function(errorObj) {
            if($('#msg-upload').length == 0)
                $('<div class="page-alert"><div class="alert alert-error"><a class="close" data-dismiss="alert">×</a><span id="msg-upload"></span></div></div>').insertAfter('.navbar');
            $('#msg-upload').html($('#msg-upload').text()+"<div>"+errorObj.error+' '+errorObj.name)+'</div>';
            $('.file-uploader').find('[data-spinner="1"]').hide();

        }
    });
    $('#btn-trash').click(function(e){
        $dp.datepicker('hide');
        $('input#task_dateEnd').val('');
    });
    $dp = $('#datepick').datepicker()
    .on('changeDate', function(ev){
        $('input#task_dateEnd').val($('#datepick').data('date'));
        $('#datepick').datepicker('hide');
    });
    $("select#task_members").select2();
    $("input#task_tags").select2({tags:["{{ defaultTags|join('","')|raw}}"],tokenSeparators: [","] });
    $('.wysihtml5').wysihtml5({
        "html":true,
        "color":true
    });
    $('div.btn-group[data-toggle-name=*]').each(function(){
    var group   = $(this);
    var form    = group.parents('form').eq(0);
    var name    = group.attr('data-toggle-name');
    var hidden  = $('input[name="' + name + '"]', form);
    $('button', group).each(function(){
      var button = $(this);
      button.live('click', function(){
          hidden.val($(this).val());
      });
      if(button.val() == hidden.val()) {
        button.addClass('active');
      }
    });
  });
});