/*! jQuery Validation Plugin - v1.11.0 - 2/4/2013
* https://github.com/jzaefferer/jquery-validation
* Copyright (c) 2013 Jörn Zaefferer; Licensed MIT */
(function(){function e(e){return e.replace(/<.[^<>]*?>/g," ").replace(/&nbsp;|&#160;/gi," ").replace(/[.(),;:!?%#$'"_+=\/\-]*/g,"")}jQuery.validator.addMethod("maxWords",function(t,n,r){return this.optional(n)||e(t).match(/\b\w+\b/g).length<=r},jQuery.validator.format("Please enter {0} words or less.")),jQuery.validator.addMethod("minWords",function(t,n,r){return this.optional(n)||e(t).match(/\b\w+\b/g).length>=r},jQuery.validator.format("Please enter at least {0} words.")),jQuery.validator.addMethod("rangeWords",function(t,n,r){var i=e(t),s=/\b\w+\b/g;return this.optional(n)||i.match(s).length>=r[0]&&i.match(s).length<=r[1]},jQuery.validator.format("Please enter between {0} and {1} words."))})(),jQuery.validator.addMethod("letterswithbasicpunc",function(e,t){return this.optional(t)||/^[a-z\-.,()'"\s]+$/i.test(e)},"Letters or punctuation only please"),jQuery.validator.addMethod("alphanumeric",function(e,t){return this.optional(t)||/^\w+$/i.test(e)},"Letters, numbers, and underscores only please"),jQuery.validator.addMethod("lettersonly",function(e,t){return this.optional(t)||/^[a-z]+$/i.test(e)},"Letters only please"),jQuery.validator.addMethod("nowhitespace",function(e,t){return this.optional(t)||/^\S+$/i.test(e)},"No white space please"),jQuery.validator.addMethod("ziprange",function(e,t){return this.optional(t)||/^90[2-5]\d\{2\}-\d{4}$/.test(e)},"Your ZIP-code must be in the range 902xx-xxxx to 905-xx-xxxx"),jQuery.validator.addMethod("zipcodeUS",function(e,t){return this.optional(t)||/\d{5}-\d{4}$|^\d{5}$/.test(e)},"The specified US ZIP Code is invalid"),jQuery.validator.addMethod("integer",function(e,t){return this.optional(t)||/^-?\d+$/.test(e)},"A positive or negative non-decimal number please"),jQuery.validator.addMethod("vinUS",function(e){if(e.length!==17)return!1;var t,n,r,i,s,o,u=["A","B","C","D","E","F","G","H","J","K","L","M","N","P","R","S","T","U","V","W","X","Y","Z"],a=[1,2,3,4,5,6,7,8,1,2,3,4,5,7,9,2,3,4,5,6,7,8,9],f=[8,7,6,5,4,3,2,10,0,9,8,7,6,5,4,3,2],l=0;for(t=0;t<17;t++){i=f[t],r=e.slice(t,t+1),t===8&&(o=r);if(!isNaN(r))r*=i;else for(n=0;n<u.length;n++)if(r.toUpperCase()===u[n]){r=a[n],r*=i,isNaN(o)&&n===8&&(o=u[n]);break}l+=r}return s=l%11,s===10&&(s="X"),s===o?!0:!1},"The specified vehicle identification number (VIN) is invalid."),jQuery.validator.addMethod("dateITA",function(e,t){var n=!1,r=/^\d{1,2}\/\d{1,2}\/\d{4}$/;if(r.test(e)){var i=e.split("/"),s=parseInt(i[0],10),o=parseInt(i[1],10),u=parseInt(i[2],10),a=new Date(u,o-1,s);a.getFullYear()===u&&a.getMonth()===o-1&&a.getDate()===s?n=!0:n=!1}else n=!1;return this.optional(t)||n},"Please enter a correct date"),jQuery.validator.addMethod("dateNL",function(e,t){return this.optional(t)||/^(0?[1-9]|[12]\d|3[01])[\.\/\-](0?[1-9]|1[012])[\.\/\-]([12]\d)?(\d\d)$/.test(e)},"Vul hier een geldige datum in."),jQuery.validator.addMethod("time",function(e,t){return this.optional(t)||/^([01]\d|2[0-3])(:[0-5]\d){1,2}$/.test(e)},"Please enter a valid time, between 00:00 and 23:59"),jQuery.validator.addMethod("time12h",function(e,t){return this.optional(t)||/^((0?[1-9]|1[012])(:[0-5]\d){1,2}( ?[AP]M))$/i.test(e)},"Please enter a valid time in 12-hour format"),jQuery.validator.addMethod("phoneUS",function(e,t){return e=e.replace(/\s+/g,""),this.optional(t)||e.length>9&&e.match(/^(\+?1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/)},"Please specify a valid phone number"),jQuery.validator.addMethod("phoneUK",function(e,t){return e=e.replace(/\(|\)|\s+|-/g,""),this.optional(t)||e.length>9&&e.match(/^(?:(?:(?:00\s?|\+)44\s?)|(?:\(?0))(?:(?:\d{5}\)?\s?\d{4,5})|(?:\d{4}\)?\s?(?:\d{5}|\d{3}\s?\d{3}))|(?:\d{3}\)?\s?\d{3}\s?\d{3,4})|(?:\d{2}\)?\s?\d{4}\s?\d{4}))$/)},"Please specify a valid phone number"),jQuery.validator.addMethod("mobileUK",function(e,t){return e=e.replace(/\s+|-/g,""),this.optional(t)||e.length>9&&e.match(/^(?:(?:(?:00\s?|\+)44\s?|0)7(?:[45789]\d{2}|624)\s?\d{3}\s?\d{3})$/)},"Please specify a valid mobile number"),jQuery.validator.addMethod("phonesUK",function(e,t){return e=e.replace(/\s+|-/g,""),this.optional(t)||e.length>9&&e.match(/^(?:(?:(?:00\s?|\+)44\s?|0)(?:1\d{8,9}|[23]\d{9}|7(?:[45789]\d{8}|624\d{6})))$/)},"Please specify a valid uk phone number"),jQuery.validator.addMethod("postcodeUK",function(e,t){return e=e.toUpperCase().replace(/\s+/g,""),this.optional(t)||e.match(/^([^QZ][^IJZ]{0,1}\d{1,2})(\d[^CIKMOV]{2})$/)||e.match(/^([^QV]\d[ABCDEFGHJKSTUW])(\d[^CIKMOV]{2})$/)||e.match(/^([^QV][^IJZ]\d[ABEHMNPRVWXY])(\d[^CIKMOV]{2})$/)||e.match(/^(GIR)(0AA)$/)||e.match(/^(BFPO)(\d{1,4})$/)||e.match(/^(BFPO)(C\/O\d{1,3})$/)},"Please specify a valid postcode"),jQuery.validator.addMethod("strippedminlength",function(e,t,n){return jQuery(e).text().length>=n},jQuery.validator.format("Please enter at least {0} characters")),jQuery.validator.addMethod("email2",function(e,t,n){return this.optional(t)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(e)},jQuery.validator.messages.email),jQuery.validator.addMethod("url2",function(e,t,n){return this.optional(t)||/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(e)},jQuery.validator.messages.url),jQuery.validator.addMethod("creditcardtypes",function(e,t,n){if(/[^0-9\-]+/.test(e))return!1;e=e.replace(/\D/g,"");var r=0;return n.mastercard&&(r|=1),n.visa&&(r|=2),n.amex&&(r|=4),n.dinersclub&&(r|=8),n.enroute&&(r|=16),n.discover&&(r|=32),n.jcb&&(r|=64),n.unknown&&(r|=128),n.all&&(r=255),r&1&&/^(5[12345])/.test(e)?e.length===16:r&2&&/^(4)/.test(e)?e.length===16:r&4&&/^(3[47])/.test(e)?e.length===15:r&8&&/^(3(0[012345]|[68]))/.test(e)?e.length===14:r&16&&/^(2(014|149))/.test(e)?e.length===15:r&32&&/^(6011)/.test(e)?e.length===16:r&64&&/^(3)/.test(e)?e.length===16:r&64&&/^(2131|1800)/.test(e)?e.length===15:r&128?!0:!1},"Please enter a valid credit card number."),jQuery.validator.addMethod("ipv4",function(e,t,n){return this.optional(t)||/^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i.test(e)},"Please enter a valid IP v4 address."),jQuery.validator.addMethod("ipv6",function(e,t,n){return this.optional(t)||/^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i.test(e)},"Please enter a valid IP v6 address."),jQuery.validator.addMethod("pattern",function(e,t,n){return this.optional(t)?!0:(typeof n=="string"&&(n=new RegExp("^(?:"+n+")$")),n.test(e))},"Invalid format."),jQuery.validator.addMethod("require_from_group",function(e,t,n){var r=this,i=n[1],s=$(i,t.form).filter(function(){return r.elementValue(this)}).length>=n[0];if(!$(t).data("being_validated")){var o=$(i,t.form);o.data("being_validated",!0),o.valid(),o.data("being_validated",!1)}return s},jQuery.format("Please fill at least {0} of these fields.")),jQuery.validator.addMethod("skip_or_fill_minimum",function(e,t,n){var r=this,i=n[0],s=n[1],o=$(s,t.form).filter(function(){return r.elementValue(this)}).length,u=o>=i||o===0;if(!$(t).data("being_validated")){var a=$(s,t.form);a.data("being_validated",!0),a.valid(),a.data("being_validated",!1)}return u},jQuery.format("Please either skip these fields or fill at least {0} of them.")),jQuery.validator.addMethod("accept",function(e,t,n){var r=typeof n=="string"?n.replace(/\s/g,"").replace(/,/g,"|"):"image/*",i=this.optional(t),s,o;if(i)return i;if($(t).attr("type")==="file"){r=r.replace(/\*/g,".*");if(t.files&&t.files.length)for(s=0;s<t.files.length;s++){o=t.files[s];if(!o.type.match(new RegExp(".?("+r+")$","i")))return!1}}return!0},jQuery.format("Please enter a value with a valid mimetype.")),jQuery.validator.addMethod("extension",function(e,t,n){return n=typeof n=="string"?n.replace(/,/g,"|"):"png|jpe?g|gif",this.optional(t)||e.match(new RegExp(".("+n+")$","i"))},jQuery.format("Please enter a value with a valid extension."));