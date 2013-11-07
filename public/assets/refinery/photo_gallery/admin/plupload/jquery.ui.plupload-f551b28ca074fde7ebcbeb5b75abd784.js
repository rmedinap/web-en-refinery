!function(e,t,i,n){function s(e){return i.translate(e)||e}function a(e){e.html('<div class="plupload_wrapper"><div class="ui-widget-content plupload_container"><div class="plupload"><div class="ui-state-default ui-widget-header plupload_header"><div class="plupload_header_content"><div class="plupload_header_title">'+s("Select files")+'</div><div class="plupload_header_text">'+s("Add files to the upload queue and click the start button.")+'</div></div></div><div class="plupload_content"><table class="plupload_filelist"><tr class="ui-widget-header plupload_filelist_header"><td class="plupload_cell plupload_file_name">'+s("Filename")+'</td><td class="plupload_cell plupload_file_status">'+s("Status")+'</td><td class="plupload_cell plupload_file_size">'+s("Size")+'</td><td class="plupload_cell plupload_file_action">&nbsp;</td></tr></table><div class="plupload_scroll"><table class="plupload_filelist_content"></table></div><table class="plupload_filelist"><tr class="ui-widget-header ui-widget-content plupload_filelist_footer"><td class="plupload_cell plupload_file_name"><div class="plupload_buttons"><!-- Visible --><a class="plupload_button plupload_add">'+s("Add Files")+'</a>&nbsp;<a class="plupload_button plupload_start">'+s("Start Upload")+'</a>&nbsp;<a class="plupload_button plupload_stop plupload_hidden">'+s("Stop Upload")+'</a>&nbsp;</div><div class="plupload_started plupload_hidden"><!-- Hidden --><div class="plupload_progress plupload_right"><div class="plupload_progress_container"></div></div><div class="plupload_cell plupload_upload_status"></div><div class="plupload_clearer">&nbsp;</div></div></td><td class="plupload_file_status"><span class="plupload_total_status">0%</span></td><td class="plupload_file_size"><span class="plupload_total_file_size">0 kb</span></td><td class="plupload_file_action"></td></tr></table></div></div></div><input class="plupload_count" value="0" type="hidden"></div>')}var o={};n.widget("ui.plupload",{contents_bak:"",runtime:null,options:{browse_button_hover:"ui-state-hover",browse_button_active:"ui-state-active",dragdrop:!0,multiple_queues:!0,buttons:{browse:!0,start:!0,stop:!0},autostart:!1,sortable:!1,rename:!1,max_file_count:0},FILE_COUNT_ERROR:-9001,_create:function(){var e,t,r=this;e=this.element.attr("id"),e||(e=i.guid(),this.element.attr("id",e)),this.id=e,this.contents_bak=this.element.html(),a(this.element),this.container=n(".plupload_container",this.element).attr("id",e+"_container"),this.filelist=n(".plupload_filelist_content",this.container).attr({id:e+"_filelist",unselectable:"on"}),this.browse_button=n(".plupload_add",this.container).attr("id",e+"_browse"),this.start_button=n(".plupload_start",this.container).attr("id",e+"_start"),this.stop_button=n(".plupload_stop",this.container).attr("id",e+"_stop"),n.ui.button&&(this.browse_button.button({icons:{primary:"ui-icon-circle-plus"}}),this.start_button.button({icons:{primary:"ui-icon-circle-arrow-e"},disabled:!0}),this.stop_button.button({icons:{primary:"ui-icon-circle-close"}})),this.progressbar=n(".plupload_progress_container",this.container),n.ui.progressbar&&this.progressbar.progressbar(),this.counter=n(".plupload_count",this.element).attr({id:e+"_count",name:e+"_count"}),t=this.uploader=o[e]=new i.Uploader(n.extend({container:e,browse_button:e+"_browse"},this.options)),t.bind("Error",function(e,t){t.code===i.INIT_ERROR&&r.destroy()}),t.bind("Init",function(e,i){r.options.buttons.browse||(r.browse_button.button("disable").hide(),e.disableBrowse(!0)),r.options.buttons.start||r.start_button.button("disable").hide(),r.options.buttons.stop||r.stop_button.button("disable").hide(),!r.options.unique_names&&r.options.rename&&r._enableRenaming(),t.features.dragdrop&&r.options.dragdrop&&r._enableDragAndDrop(),r.container.attr("title",s("Using runtime: ")+(r.runtime=i.runtime)),r.start_button.click(function(e){n(this).button("option","disabled")||r.start(),e.preventDefault()}),r.stop_button.click(function(e){r.stop(),e.preventDefault()})}),r.options.max_file_count&&t.bind("FilesAdded",function(e,t){var i=[],n=t.length,a=e.files.length+n-r.options.max_file_count;a>0&&(i=t.splice(n-a,a),e.trigger("Error",{code:r.FILE_COUNT_ERROR,message:s("File count error."),file:i}))}),t.init(),t.bind("FilesAdded",function(e,t){r._trigger("selected",null,{up:e,files:t}),r.options.autostart&&setTimeout(function(){r.start()},10)}),t.bind("FilesRemoved",function(e,t){r._trigger("removed",null,{up:e,files:t})}),t.bind("QueueChanged",function(){r._updateFileList()}),t.bind("StateChanged",function(){r._handleState()}),t.bind("UploadFile",function(e,t){r._handleFileStatus(t)}),t.bind("FileUploaded",function(e,t){r._handleFileStatus(t),r._trigger("uploaded",null,{up:e,file:t})}),t.bind("UploadProgress",function(e,t){n("#"+t.id).find(".plupload_file_status").html(t.percent+"%").end().find(".plupload_file_size").html(i.formatSize(t.size)),r._handleFileStatus(t),r._updateTotalProgress(),r._trigger("progress",null,{up:e,file:t})}),t.bind("UploadComplete",function(e,t){r._trigger("complete",null,{up:e,files:t})}),t.bind("Error",function(e,t){var n,a,o=t.file;if(o){if(n="<strong>"+t.message+"</strong>",a=t.details)n+=" <br /><i>"+t.details+"</i>";else{switch(t.code){case i.FILE_EXTENSION_ERROR:a=s("File: %s").replace("%s",o.name);break;case i.FILE_SIZE_ERROR:a=s("File: %f, size: %s, max file size: %m").replace(/%([fsm])/g,function(e,t){switch(t){case"f":return o.name;case"s":return o.size;case"m":return i.parseSize(r.options.max_file_size)}});break;case r.FILE_COUNT_ERROR:a=s("Upload element accepts only %d file(s) at a time. Extra files were stripped.").replace("%d",r.options.max_file_count);break;case i.IMAGE_FORMAT_ERROR:a=i.translate("Image format either wrong or not supported.");break;case i.IMAGE_MEMORY_ERROR:a=i.translate("Runtime ran out of available memory.");break;case i.IMAGE_DIMENSIONS_ERROR:a=i.translate("Resoultion out of boundaries! <b>%s</b> runtime supports images only up to %wx%hpx.").replace(/%([swh])/g,function(t,i){switch(i){case"s":return e.runtime;case"w":return e.features.maxWidth;case"h":return e.features.maxHeight}});break;case i.HTTP_ERROR:a=s("Upload URL might be wrong or doesn't exist")}n+=" <br /><i>"+a+"</i>"}r.notify("error",n),r._trigger("error",null,{up:e,file:o,error:n})}})},_setOption:function(e,t){var i=this;"buttons"==e&&"object"==typeof t&&(t=n.extend(i.options.buttons,t),t.browse?(i.browse_button.button("enable").show(),up.disableBrowse(!1)):(i.browse_button.button("disable").hide(),up.disableBrowse(!0)),t.start?i.start_button.button("enable").show():i.start_button.button("disable").hide(),t.stop?i.start_button.button("enable").show():i.stop_button.button("disable").hide()),i.uploader.settings[e]=t},start:function(){this.uploader.start(),this._trigger("start",null)},stop:function(){this.uploader.stop(),this._trigger("stop",null)},getFile:function(e){var t;return t="number"==typeof e?this.uploader.files[e]:this.uploader.getFile(e)},removeFile:function(e){var t=this.getFile(e);t&&this.uploader.removeFile(t)},clearQueue:function(){this.uploader.splice()},getUploader:function(){return this.uploader},refresh:function(){this.uploader.refresh()},_handleState:function(){var e=this,t=this.uploader;t.state===i.STARTED?(n(e.start_button).button("disable"),n([]).add(e.stop_button).add(".plupload_started").removeClass("plupload_hidden"),n(".plupload_upload_status",e.element).text(s("Uploaded %d/%d files").replace("%d/%d",t.total.uploaded+"/"+t.files.length)),n(".plupload_header_content",e.element).addClass("plupload_header_content_bw")):(n([]).add(e.stop_button).add(".plupload_started").addClass("plupload_hidden"),e.options.multiple_queues&&(n(e.start_button).button("enable"),n(".plupload_header_content",e.element).removeClass("plupload_header_content_bw")),e._updateFileList())},_handleFileStatus:function(e){var t,s;if(n("#"+e.id).length){switch(e.status){case i.DONE:t="plupload_done",s="ui-icon ui-icon-circle-check";break;case i.FAILED:t="ui-state-error plupload_failed",s="ui-icon ui-icon-alert";break;case i.QUEUED:t="plupload_delete",s="ui-icon ui-icon-circle-minus";break;case i.UPLOADING:t="ui-state-highlight plupload_uploading",s="ui-icon ui-icon-circle-arrow-w";var a=n(".plupload_scroll",this.container),o=a.scrollTop(),r=a.height(),l=n("#"+e.id).position().top+n("#"+e.id).height();l>r&&a.scrollTop(o+l-r)}t+=" ui-state-default plupload_file",n("#"+e.id).attr("class",t).find(".ui-icon").attr("class",s)}},_updateTotalProgress:function(){var e=this.uploader;this.progressbar.progressbar("value",e.total.percent),this.element.find(".plupload_total_status").html(e.total.percent+"%").end().find(".plupload_total_file_size").html(i.formatSize(e.total.size)).end().find(".plupload_upload_status").text(s("Uploaded %d/%d files").replace("%d/%d",e.total.uploaded+"/"+e.files.length))},_updateFileList:function(){var e,t,a=this,o=this.uploader,r=this.filelist,l=0,h=this.id+"_";n.ui.sortable&&this.options.sortable&&n("tbody",r).sortable("destroy"),r.empty(),n.each(o.files,function(s,c){t="",e=h+l,c.status===i.DONE&&(c.target_name&&(t+='<input type="hidden" name="'+e+'_tmpname" value="'+i.xmlEncode(c.target_name)+'" />'),t+='<input type="hidden" name="'+e+'_name" value="'+i.xmlEncode(c.name)+'" />',t+='<input type="hidden" name="'+e+'_status" value="'+(c.status===i.DONE?"done":"failed")+'" />',l++,a.counter.val(l)),r.append('<tr class="ui-state-default plupload_file" id="'+c.id+'"><td class="plupload_cell plupload_file_name"><span>'+c.name+'</span></td><td class="plupload_cell plupload_file_status">'+c.percent+'%</td><td class="plupload_cell plupload_file_size">'+i.formatSize(c.size)+'</td><td class="plupload_cell plupload_file_action"><div class="ui-icon"></div>'+t+"</td></tr>"),a._handleFileStatus(c),n("#"+c.id+".plupload_delete .ui-icon, #"+c.id+".plupload_done .ui-icon").click(function(e){n("#"+c.id).remove(),o.removeFile(c),e.preventDefault()}),a._trigger("updatelist",null,r)}),0===o.total.queued?n(".ui-button-text",a.browse_button).text(s("Add Files")):n(".ui-button-text",a.browse_button).text(s("%d files queued").replace("%d",o.total.queued)),o.files.length===o.total.uploaded+o.total.failed?a.start_button.button("disable"):a.start_button.button("enable"),r[0].scrollTop=r[0].scrollHeight,a._updateTotalProgress(),!o.files.length&&o.features.dragdrop&&o.settings.dragdrop?n("#"+e+"_filelist").append('<tr><td class="plupload_droptext">'+s("Drag files here.")+"</td></tr>"):a.options.sortable&&n.ui.sortable&&a._enableSortingList()},_enableRenaming:function(){var e=this;n(".plupload_delete .plupload_file_name span",this.filelist).live("click",function(t){var i,s,a,o=n(t.target),r="";i=e.uploader.getFile(o.parents("tr")[0].id),a=i.name,s=/^(.+)(\.[^.]+)$/.exec(a),s&&(a=s[1],r=s[2]),o.hide().after('<input class="plupload_file_rename" type="text" />'),o.next().val(a).focus().blur(function(){o.show().next().remove()}).keydown(function(e){var t=n(this);-1!==n.inArray(e.keyCode,[13,27])&&(e.preventDefault(),13===e.keyCode&&(i.name=t.val()+r,o.text(i.name)),t.blur())})})},_enableDragAndDrop:function(){this.filelist.append('<tr><td class="plupload_droptext">'+s("Drag files here.")+"</td></tr>"),this.filelist.parent().attr("id",this.id+"_dropbox"),this.uploader.settings.drop_element=this.options.drop_element=this.id+"_dropbox"},_enableSortingList:function(){var e=this;n("tbody tr",this.filelist).length<2||n("tbody",this.filelist).sortable({containment:"parent",items:".plupload_delete",helper:function(e,t){return t.clone(!0).find("td:not(.plupload_file_name)").remove().end().css("width","100%")},stop:function(){var t=[];n.each(n(this).sortable("toArray"),function(i,n){t[t.length]=e.uploader.getFile(n)}),t.unshift(t.length),t.unshift(0),Array.prototype.splice.apply(e.uploader.files,t)}})},notify:function(e,t){var i=n('<div class="plupload_message"><span class="plupload_message_close ui-icon ui-icon-circle-close" title="'+s("Close")+'"></span><p><span class="ui-icon"></span>'+t+"</p></div>");i.addClass("ui-state-"+("error"===e?"error":"highlight")).find("p .ui-icon").addClass("ui-icon-"+("error"===e?"alert":"info")).end().find(".plupload_message_close").click(function(){i.remove()}).end(),n(".plupload_header_content",this.container).append(i)},destroy:function(){n(".plupload_button",this.element).unbind(),n.ui.button&&n(".plupload_add, .plupload_start, .plupload_stop",this.container).button("destroy"),n.ui.progressbar&&this.progressbar.progressbar("destroy"),n.ui.sortable&&this.options.sortable&&n("tbody",this.filelist).sortable("destroy"),this.uploader.destroy(),this.element.empty().html(this.contents_bak),this.contents_bak="",n.Widget.prototype.destroy.apply(this)}})}(window,document,plupload,jQuery);