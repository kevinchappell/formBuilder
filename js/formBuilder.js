/**
 * jQuery Form Builder
 * Description: A drag and drop editor to make building forms fast and easy.
 * Version: 1.0
 * Author: Kevin Chappell
 */
(function ($) {
  var FormBuilder = function (element, options) {

    var defaults = {
      disabled_fields: {
        before: "",
        after: ""
      },
      roles: {
        1: "Administrator"
      },
      showWarning: false,
      serialize_prefix: 'frmb',
      messages: {
        add: "Add Item",
        allow_select: "Allow Select",
        cannot_be_empty: "This field cannot be empty",
        checkbox_group: "Checkbox Group",
        checkbox: "Checkbox",
        checkboxes: "Checkboxes",
        clear_all_message: "Are you sure you want to remove all items?",
        clear_all: "Clear All",
        close: "Close",
        copy: "Copy To Clipboard",
        date_field: "Date Field",
        description: "Help Text",
        description_field: "Description",
        dev_mode: "Developer Mode",
        disabled_fields: "These fields cannot be moved.",
        edit_names: "Edit Names",
        editor_title: "Form Elements",
        editor_xml: "Edit XML",
        field_vars: "Field Variables",
        field_removal_warning: "Ideas have already been submitted to this community. If you remove this field you will no longer be able to use it for idea submission. The data will still be available for reporting. Are you sure you want to proceed?",
        hide: "Edit",
        label: "Label",
        label_empty: "Field Label cannot be empty",
        limit_role: "Limit access to one or more of the following roles:",
        mandatory: "Mandatory",
        max_length: "Max Length",
        min_of_one: "This field requires a minimum of 2 options",
        name: "Name",
        no: "No",
        off: "Off",
        on: "On",
        optional: "optional",
        option_placeholder: "Value",
        option_empty: "Option value required",
        paragraph: "Paragraph",
        preview: "Preview",
        radio_group: "Radio Group",
        radio: "Radio",
        remove_message: "Remove Element",
        remove: "Remove",
        required: "Required",
        rich_text: "Rich Text Editor",
        roles: "Access",
        save: "Save Template",
        select_options: "Select Items",
        select: "Select",
        selections_message: "Allow Multiple Selections",
        text: "Text Field",
        user_field: "Autocomplete",
        warning: "Warning!",
        view_vars: "View Field Variables",
        view_xml: "View XML",
        yes: "Yes"
      }
    };

    // object full of useful utilities
    var helpers = {
      start_moving: function (evt, ui) {
        ui.item.addClass("moving");
        start_index = $("li", this).index(ui.item);
      },
      stop_moving: function (evt, ui) {
        ui.item.removeClass("moving");
        if (doCancel) {
          $(ui.sender).sortable('cancel');
          $(this).sortable('cancel');
        }
      },
      safename: function (str) {
        var safe_name_str = str.replace(/\s/g, '-').replace(/[^a-zA-Z0-9\-]/g, '');
        var safe_name = safe_name_str.toLowerCase();
        return safe_name;
      },
      isNan: function (str) {
        var strip_nan = str.replace(/[^0-9]/g, '');
        return strip_nan;
      },
      initTooltip: function (tt) {
        var tooltip = tt.find('.tooltip');
        tt.mouseenter(function () {
          if (tooltip.outerWidth() > 200) {
            tooltip.addClass('max-width');
          }
          tooltip.css('left', tt.width() + 14);
          tooltip.stop(true, true).fadeIn('fast');
        }).mouseleave(function () {
          tt.find('.tooltip').stop(true, true).fadeOut('fast');
        });
        tooltip.hide();
      },
      // saves the field data to our canvas (elem)
      save: function () {
        $(ul_obj).children("li").not('.disabled').each(function (i) {
          helpers.save_options($(this));
        });
        elem.val($(ul_obj).toSpigitXML());
      },
      // save_options will generate the preview for radio and checkbox groups
      save_options: function (field) {
        if (!field.hasClass("10")) {
          return false;
        }
        var preview = "";
        $(".ol_opt_sortable li", field).each(function () {
          var option = $(".select_opt", $(this))[0].outerHTML;
          var label = $(".option", $(this)).val();
          preview += option + " " + label + "<br/>";
        });
        $(".prev_holder", field).html(preview);
      },
      // update preview to label
      updateMultipleSelect: function () {
        $('#' + frmb_id).delegate('input[name="multiple"]', 'change', function () {
          var options = $(this).parents('.fields:eq(0)').find(".ol_opt_sortable input.select_opt");
          if (this.checked) {
            options.each(function () {
              $(this).prop("type", "checkbox");
            });
          } else {
            options.each(function () {
              $(this).removeAttr("checked").prop("type", "radio");
            });
          }
        });
      },
      htmlEncode: function (value){
        return $('<div/>').text(value).html();
      },
      htmlDecode: function (value){
        return $('<div/>').html(value).text();
      },
      validateForm: function (e) {
        var errors = [];
        // check for empty field labels
        $('input[name="label"]', '#' + frmb_id).each(function () {
          if ($(this).val() === "") {
            var field = $(this).parents("li:eq(0)"),
              field_attr = $(this);
            errors.push({
              field: field,
              error: opts.messages.label_empty,
              attribute: field_attr
            });
          }
        });

        $('input[type="text"].option', '#' + frmb_id).each(function () {
          if ($(this).val() === "") {
            var field = $(this).parents("li:eq(1)"),
              field_attr = $(this);
            errors.push({
              field: field,
              error: opts.messages.option_empty,
              attribute: field_attr
            });
          }
        });

        if (errors.length !== 0) {
          // showNotice({
          //   "message": errors[0].error,
          //   "type": "error"
          // });
          $('html, body').animate({
            scrollTop: errors[0].field.offset().top
          }, 1000, function () {
            var target_id = $(".toggle-form", errors[0].field).attr("id");
            $(".toggle-form", errors[0].field).addClass("open").parent().next(".prev_holder").slideUp(250);
            $("#" + target_id + "-fld").slideDown(250, function () {
              errors[0].attribute.addClass("error");
            });
          });
        } else {
          setValues(e);
        }
      },
      disabledTT: function (field) {
        var title = field.attr("data-tooltip");
        if (title) {
          field.removeAttr('title').data('tip_text', title);
          var tt = $('<p/>', {
            "class": "mj_tt"
          }).html(title);
          field.append(tt);
          tt.css({
            top: -tt.outerHeight(),
            left: -15
          });
          field.mouseleave(function (e) {
            $(this).attr('data-tooltip', field.data('tip_text'));
            $('.mj_tt').remove();
          });
        }
      }
    };
    var opts = $.extend(defaults, options),
      elem = $(element),
      frmb_id = 'frmb-' + $('ul[id^=frmb-]').length++;

    var field = '',
      field_type = '',
      last_id = 1,
      box_id = frmb_id + '-control-box';

    // create array of field objects to cycle through
    var spigit_fields = [{
      type: 11,
      "class": "text_input",
      label: opts.messages.text
    }, {
      type: 6,
      "class": "select",
      label: opts.messages.select
    }, {
      type: 7,
      "class": "rich_text",
      label: opts.messages.rich_text
    }, {
      type: 5,
      "class": "checkbox",
      label: opts.messages.checkbox
    }, {
      type: 10,
      "class": "checkbox_group",
      label: opts.messages.checkbox_group
    }, {
      type: 10,
      "class": "radio_group",
      label: opts.messages.radio_group
    }, {
      type: 3,
      "class": "date_input",
      label: opts.messages.date_field
    }, {
      type: 9,
      "class": "user_field",
      label: opts.messages.user_field
    }];

    var di = 1;
    // prep disabled fields
    for (var key in opts.disabled_fields) {
      if (opts.disabled_fields[key] !== undefined) {
        opts.disabled_fields[key] = '<li class="disabled clearfix disabled_' + di + '">' + opts.disabled_fields[key] + '</li>';
      }
      di++;
    }

    // Create form builder canvas
    var cb_ul = $("<ul/>", {
      id: box_id,
      "class": 'frmb-control'
    });

    // Loop through
    for (var i = 0; i < spigit_fields.length; i++) {
      $("<li/>", {
        "class": spigit_fields[i].class,
        "type": spigit_fields[i].type,
        "name": spigit_fields[i].class,
        "multiple": spigit_fields[i].multiple,
        "label": spigit_fields[i].label
      }).html(spigit_fields[i].label).appendTo(cb_ul);
    }

    // Build our headers and action links
    var cb_header = $("<h4/>").html(opts.messages.editor_title),
      frmb_header = $("<h4/>").html(opts.messages.preview),
      view_xml = $("<a/>", {
        id: frmb_id + '-export-xml',
        text: opts.messages.view_xml,
        href: "javascript:void(0)",
        'class': "view_xml"
      }),
      allow_select = $("<a/>", {
        id: frmb_id + '-allow-select',
        text: opts.messages.allow_select,
        href: "javascript:void(0)",
        "class": "allow_select"
      }),
      edit_xml = $("<a/>", {
        id: frmb_id + '-edit-xml',
        text: opts.messages.edit_xml,
        href: "javascript:void(0)",
        "class": "edit_xml"
      }),
      edit_names = $("<a/>", {
        id: frmb_id + '-edit-names',
        text: opts.messages.edit_names,
        href: "javascript:void(0)",
        "class": "edit_names"
      }),
      clear_all = $("<a/>", {
        id: frmb_id + '-clear-all',
        text: opts.messages.clear_all,
        href: "javascript:void(0)",
        "class": "clear_all"
      }),
      save_all = $("<div/>", {
        id: frmb_id + '-save',
        href: "javascript:void(0)",
        "class": "speuiSpriteButton",
        title: opts.messages.save
      }).html('<a class="save speuiButton_v1 corner-all-3 primary"><span>' + opts.messages.save + '</span></a>'),
      view_vars = $("<a/>", {
        id: frmb_id + '-view-vars',
        href: "javascript:void(0)",
        "class": "view_vars",
        title: opts.messages.view_vars
      }).html(opts.messages.view_vars),
      action_links_inner = $("<div/>", {
        id: frmb_id + '-action-links-inner',
        "class": "action_links_inner"
      }).append(edit_xml, " | ", view_vars, " | ", edit_names, " | ", allow_select, " | ", clear_all, " |&nbsp;"),
      dev_mode = $("<span/>", {
        "class": "dev_mode_link"
      }).html(opts.messages.dev_mode + " " + opts.messages.off),
      action_links = $("<div/>", {
        id: frmb_id + '-action-links',
        "class": "action_links"
      }).append(action_links_inner, dev_mode);


    // Sortable fields
    var ul_obj = $('<ul/>').attr('id', frmb_id).addClass('frmb').sortable({
      cursor: 'move',
      opacity: 0.9,
      beforeStop: function (event, ui) {
        var last_index = $("> li", ul_obj).length - 1,
        cur_index = ui.placeholder.index();
        doCancel = ((cur_index <= 1) || (cur_index === last_index));
      },
      start: helpers.start_moving,
      stop: helpers.stop_moving,
      cancel: 'input, .disabled, .ol_opt_sortable',
      // items: 'li:not(.no-fields)',
      receive: function (event, ui) {
        // if (doCancel) {
        //   $("li:nth-child(" + cur_index + ")", $(this)).remove();
        // }
      },
      placeholder: "frmb-placeholder"
    });

    // ControlBox with different fields
    cb_ul.sortable({
      helper: 'clone',
      opacity: 0.9,
      connectWith: ul_obj,
      cursor: 'move',
      placeholder: "ui-state-highlight",
      start: helpers.start_moving,
      stop: helpers.stop_moving,
      revert: 150,
      change: function (event, ui) {
        var placeholder_idx = ui.placeholder.index(),
          last_idx = $("> li", ul_obj).last().index();
        if (ui.placeholder.index() === 0 || placeholder_idx === last_idx) {
          $(ui.placeholder).css('display', 'none');
        } else {
          $(ui.placeholder).css('display', 'block');
        }
      },
      remove: function (event, ui) {
        if (start_index === 0) {
          cb_ul.prepend(ui.item);
        } else {
          $("li:nth-child(" + start_index + ")", cb_ul).after(ui.item);
        }
      },
      beforeStop: function (event, ui) {
        var last_index = $("> li", ul_obj).length - 1, cur_index = ui.placeholder.index();
        doCancel = ((cur_index <= 1) || (cur_index === last_index) ? true : false);
        if (ui.placeholder.parent().hasClass("frmb-control")) {
          doCancel = true;
        }
      },
      update: function (event, ui) {
        // helpers.stop_moving;
        elem.stop_index = ($("li", ul_obj).index(ui.item) === 0 ? "0" : $("li", ul_obj).index(ui.item));
        if ($("li", ul_obj).index(ui.item) < 0) {
          $(this).sortable('cancel');
        } else {
          prepFieldVars($(ui.item[0]), true);
        }
      },
      receive: function (event, ui) {
        if (ui.sender.hasClass("frmb") || ui.sender.hasClass("frmb-control")) {
          $(ui.sender).sortable('cancel');
        }
      }
    });

    // Replace the textarea with sortable list.
    elem.before(ul_obj).parent().prepend(frmb_header).addClass("frmb_wrap").append(save_all, view_xml, action_links);

    var cb_wrap = $("<div/>", {
      id: frmb_id + '-cb_wrap',
      "class": "cb_wrap"
    }).append(cb_header, cb_ul);

    $('.frmb_wrap').before(cb_wrap).append(action_links);

    // Not pretty but we need to save a lot so users don't have to keep clicking a save button
    $("ul.frmb input").on("change", function () {
      if ($(this).parents("li.disabled").length === 0) {
        helpers.save();
      }
    });
    $("ul.frmb input").on("blur", function () {
      if ($(this).parents("li.disabled").length === 0) {
        // validateInput($(this));
        helpers.save();
      }
    });


    $('input[name="label"]', '#' + frmb_id).on("blur", function () {
      if ($(this).val() === "") {
        // showNotice({
        //   "message": opts.messages.label_empty,
        //   "type": "error"
        // });
      }
    });


    // Parse saved XML template data
    elem.getTemplate = function () {
      var xml = (elem.val() !== "" ? $.parseXML(elem.val()) : ""),
        fields = $(xml).find("field");
      if (fields.length > 0) {
        prepFieldVars(fields);
      } else if (xml === "") {
        var values = {
          label: opts.messages.description_field,
          name: "content",
          required: "true",
          description: opts.messages.mandatory
        };
        appendNewField("7", values);
        ul_obj.prepend(opts.disabled_fields.before);
        ul_obj.append(opts.disabled_fields.after);
      } else {
        ul_obj.prepend(opts.disabled_fields.before);
        ul_obj.append(opts.disabled_fields.after);
      }
    };

    var nameAttr = function (field) {
      // var f_type = field.attr("type"),
      //   fields = $('li.' + f_type + ' input[name="name"][value*="-"]', ul_obj),
      var epoch = new Date().getTime();
      return field.attr("name") + "-" + epoch;
    };

    var prepFieldVars = function (fields, is_new) {
      is_new = is_new | false;
      fields.each(function (i) {

        var f_type = $(this).attr("type");
        values = [];
        values.label = helpers.htmlEncode($(this).attr("label"));
        values.name = is_new ? nameAttr($(this)) : $(this).attr("name");
        values.role = $(this).attr("role");
        values.required = $(this).attr("required");
        values.max_length = $(this).attr("maxLength");
        values.type = f_type;
        values.description = ($(this).attr("description") !== undefined ? helpers.htmlEncode($(this).attr("description")) : "");
        if (f_type === 5) {
          $(this).children().each(function () {
            values.push([$(this).text(), this.baseline]);
          });
        }
        // select type
        else if (f_type === '6' || f_type === '10') {
          values.multiple = ($(this).hasClass("checkbox_group") ? true : ($(this).attr("style") === "multiple" ? true : false));
          values.values = [];
          if (parseInt(f_type) === 6 && !is_new && ($(this).children().length === 0)) {
            values.type = '11';
          } else {
            $(this).children().each(function (i) {
              values.values.push({
                value: $(this).text(),
                selected: ($(this).attr("default") === i ? true : false)
              });
            });
          }
        }
        appendNewField(values.type, values);
      });
      if ($("li.disabled", ul_obj).length < 2) {
        ul_obj.prepend(opts.disabled_fields.before);
        ul_obj.append(opts.disabled_fields.after);
      }
    };


    var appendNewField = function (type, values) {

      if (typeof (values) === 'undefined') {
        values = '';
      }
      field_type = type;
      switch (type) {
      case "11":
        // type = "text";
        appendTextInput(values);
        break;
      case "2":
        // type = "text";
        appendTextInput(values);
        break;
      case "3":
        // type = "date";
        appendTextInput(values);
        break;
      case "4":
        // type = "text";
        appendTextInput(values);
        break;
      case "5":
        // type = "checkbox";
        appendCheckbox(values);
        break;
      case "6":
        // type = "select";
        appendSelectList(values);
        break;
      case "7":
        // type = "textarea";
        appendTextarea(values);
        break;
      case "8":
        // type = "select";
        appendSelectList(values);
        break;
      case "9":
        // type = "user";
        appendTextInput(values);
        break;
      case "10":
        // type = "select";
        appendSelectList(values);
        break;
      }
    };


    var advFields = function (values) {

      var adv_fields = '',
        key, roles = values.role !== undefined ? values.role.split(",") : [];
      adv_fields += '<div class="frm-fld"><label>' + opts.messages.label + ' *</label>';
      adv_fields += '<input type="text" name="label" value="' + values.label + '" class="fld-label"  /></div>';

      adv_fields += '<div class="frm-fld description_wrap"><label>' + opts.messages.description + '</label>';
      adv_fields += '<input type="text" name="description" value="' + values.description + '" class="fld-description" id="description-' + last_id + '" /></div>';

      adv_fields += '<div class="frm-fld name_wrap"><label>' + opts.messages.name + ' <span class="required">*</span></label>';
      adv_fields += '<input type="text" name="name" value="' + values.name + '" class="fld-name" id="title-' + last_id + '" /></div>';

      adv_fields += '<div class="frm-fld"><label>' + opts.messages.roles + '</label>';


      adv_fields += '<input type="checkbox" name="enable_roles" value="" ' + (values.role !== undefined ? "checked" : "") + ' id="enable_roles-' + last_id + '"/> <label for="enable_roles-' + last_id + '" class="roles_label">' + opts.messages.limit_role + '</label>';
      adv_fields += '<div class="frm-fld avail_roles" ' + (values.role !== undefined ? 'style="display:block"' : "") + '>';

      for (key in opts.roles) {
        if ($.inArray(key, ["3", "4"]) === -1) {
          adv_fields += '<input type="checkbox" name="roles[]" value="' + key + '" id="fld-' + last_id + '-roles-' + key + '" ' + ($.inArray(key, roles) !== -1 ? "checked" : "") + ' class="roles_field" /><label for="fld-' + last_id + '-roles-' + key + '">' + opts.roles[key] + '</label><br/>';
        }
      }
      adv_fields += '</div></div>';

      // if field type is not checkbox, checkbox/radio group or select list, add max length
      if ($.inArray(values.type, ["5", "6", "10", "3", "9"]) < 0) {
        adv_fields += '<div class="frm-fld"><label class="max_length-label">' + opts.messages.max_length + '</label>';
        adv_fields += '<input type="text" name="max_length" maxlength="4" value="' + (values.max_length !== undefined ? values.max_length : "") + '" class="fld-max_length" id="max_length-' + last_id + '" /></div>';
      }

      return adv_fields;
    };

    // single line input type="text"
    var appendTextInput = function (values) {
      appendFieldLi(opts.messages.text, advFields(values), values);
    };
    // multi-line textarea
    var appendTextarea = function (values) {
      appendFieldLi(opts.messages.rich_text, advFields(values), values);
    };
    // append checkbox
    var appendCheckbox = function (values) {
      appendFieldLi(opts.messages.checkbox, advFields(values), values);
    };
    // Select field html, since there may be multiple
    var selectFieldHtml = function (values, name, selected, multiple) {
      return radioFieldHtml(values, name, selected, multiple);
    };
    // Radio field html
    var radioFieldHtml = function (value, name, selected, multiple) {

      var selected_type = (multiple ? "checkbox" : "radio");
      field = '<li>';
      field += '<input type="' + selected_type + '" ' + selected + ' class="select_opt" name="' + name + '" />';
      field += '<input type="text" class="option" placeholder="' + opts.messages.option_placeholder + '" value="' + value + '" />';
      field += '<a href="#" class="remove btn" title="' + opts.messages.remove_message + '">' + opts.messages.remove + '</a>';
      field += '</li>';

      return field;
    };
    // add select dropdown
    var appendSelectList = function (values) {

      if (values.values.length === 0) {
        values.values = [{
          selected: "false",
          value: "Option 1"
        }, {
          selected: "false",
          value: "Option 2"
        }];
      }
      var field = "",
        name = helpers.safename(values.name);
      // until select is made available to users we will hide it
      var multi_display = (values.type === "10") ? "none" : "none";

      field += advFields(values);
      field += '<div class="false-label">' + opts.messages.select_options + '</div>';
      field += '<div class="fields">';

      field += '<div class="allow_multi" style="display:' + multi_display + '">';
      field += '<input type="checkbox" id="multiple_' + last_id + '" name="multiple"' + (values.multiple ? 'checked="checked"' : '') + '>';
      field += '<label class="multiple" for="multiple_' + last_id + '">' + opts.messages.selections_message + '</label>';
      field += '</div>';
      field += '<ol class="ol_opt_sortable">';
      for (i = 0; i < values.values.length; i++) {
        field += selectFieldHtml(values.values[i].value, name, values.values[i].selected, values.multiple);
      }
      field += '</ol>';
      field += '<div class="field_actions"><a href="#" class="add add_opt"><strong>' + opts.messages.add + '</strong></a> | <a href="#" class="close_field">' + opts.messages.close + '</a></div>';
      field += '</div>';
      appendFieldLi(opts.messages.select, field, values);

      $('.ol_opt_sortable').sortable({
        // stop: function (event, ui) {
        //   if ($.browser.msie && parseInt($.browser.version, 10) < 9) {
        //     $("li a.btn.remove", $(this)).css("display", "inline-block");
        //     $("li:eq(0) .remove, li:eq(1) .remove", $(this)).css("display", "none");
        //   }
        // }
      }); // making the dynamically added option fields sortable.
    };

    // Append the new field to the editor
    var appendFieldLi = function (title, field, values) {

      var label = ($(field).find("input[name='label']").val() !== "" ? $(field).find("input[name='label']").val() : title);

      var li = '',
        del_btn = '<a id="del_' + last_id + '" class="del-button btn delete-confirm" href="#" title="' + opts.messages.remove_message + '">' + opts.messages.remove + '</a>',
        toggle_btn = '<a id="frm-' + last_id + '" class="toggle-form btn" href="#">' + opts.messages.hide + '</a> ',
        required = values.required,
        tooltip = values.description !== "" ? '<span class="element-info corner-all-3 tooltip-element">?<span class="tooltip tooltip-left-side corner-all-3" aria-required="true">' + values.description + '<span class="indicator top-side"></span></span></span>' : '';

      li += '<li id="frm-' + last_id + '-item" class="' + field_type + '">';
      li += '<div class="legend">';
      li += del_btn;
      li += '<span id="txt-title-' + last_id + '" class="field_label">' + label + '</span>' + tooltip + '<span class="required_asterisk" ' + (required == "true" ? 'style="display:inline"' : '') + '> *</span>' + toggle_btn + '</div>';
      li += '<div class="prev_holder type_' + field_type + '"></div>';
      li += '<div id="frm-' + last_id + '-fld" class="frm-holder">';
      li += '<div class="frm-elements">';
      li += '<div class="frm-fld">';
      li += '<label>&nbsp;</label>';
      li += '<input class="required" type="checkbox" value="1" name="required-' + last_id + '" id="required-' + last_id + '"' + (required == "true" ? ' checked="checked"' : '') + ' /><label class="required_label" for="required-' + last_id + '">' + opts.messages.required + '</label>';
      li += '</div>';
      li += field;
      li += '</div>';
      li += '</div>';
      li += '</li>';
      if (elem.stop_index) {
        $("li", ul_obj).eq(elem.stop_index).after(li);
      } else {
        $(ul_obj).append(li);
        helpers.initTooltip($('#frm-' + last_id + '-item').find('.tooltip-element'));
      }

      $('#frm-' + last_id + '-item').hide().slideDown(250);

      last_id++;
      helpers.save();
    };

    // ---------------------- UTILITIES ---------------------- //

    // delete options
    $('#' + frmb_id).delegate('.remove', 'click', function (e) {
      e.preventDefault();
      var opts_length = $(this).parents('.ol_opt_sortable:eq(0)').children("li").length;
      if (opts_length <= 2) {
        // showNotice({
        //   "message": opts.messages.min_of_one,
        //   "type": "error"
        // });
      } else {
        $(this).parent('li').slideUp('250', function () {
          $(this).remove();
        });
      }
    });

    // toggle fields
    $('#' + frmb_id).delegate('.toggle-form', 'click', function (e) {
      e.preventDefault();
      var target_id = $(this).attr("id");
      $(this).toggleClass("open").parent().next(".prev_holder").slideToggle(250, helpers.save_options($(this).parents("li:eq(0)")));
      $("#" + target_id + "-fld").slideToggle(250, function () {
        // if ($.browser.msie && parseInt($.browser.version, 10) < 9) {
        //   $("li:eq(0) .remove, li:eq(1) .remove", $(this)).css("display", "none");
        // }
      });

    });

    // update preview to label
    $('#' + frmb_id).delegate('input[name="label"]', 'keyup', function () {
      $(".field_label", $(this).closest("li")).text($(this).val());
    });

    // remove error styling when users tries to correct mistake
    $('#' + frmb_id).delegate('input.error', 'keyup', function () {
      $(this).removeClass("error");
    });

    // update preview for description
    $('#' + frmb_id).delegate('input[name="description"]', 'keyup', function () {
      var closest_tt = $(".legend .tooltip", $(this).closest("li"));
      if ($(this).val() !== "") {
        if (!closest_tt.length) {
          var tt = $('<span class="element-info corner-all-3 tooltip-element">?<span class="tooltip tooltip-left-side corner-all-3" aria-required="true">' + $(this).val() + '<span class="indicator top-side"></span></span></span>');
          $(".toggle-form", $(this).closest("li")).before(tt);
          helpers.initTooltip(tt);
        } else {
          closest_tt.text($(this).val()).append('<span class="indicator top-side"></span>');
          $(".legend .tooltip-element", $(this).closest("li")).show();
        }
      } else {
        if (closest_tt.length) {
          $(".legend .tooltip-element", $(this).closest("li")).hide();
        }
      }
    });

    helpers.updateMultipleSelect();

    // format name attribute
    $('#' + frmb_id).delegate('input[name="name"]', 'keyup', function () {
      $(this).val(helpers.safename($(this).val()));
      if ($(this).val() === "") {
        $(this).addClass("field_error").attr("placeholder", opts.messages.cannot_be_empty);
      } else {
        $(this).removeClass("field_error");
      }
    });

    $('#' + frmb_id).delegate('input.fld-max_length', 'keyup', function () {
      $(this).val(helpers.isNan($(this).val()));
    });

    // Delete field
    $('#' + frmb_id).delegate('.delete-confirm', 'click', function (e) {
      e.preventDefault();

      // lets see if the user really wants to remove this field... FOREVER
      var field_warn_h3 = $("<h3/>").html("<span></span>" + opts.messages.warning),
        delete_id = $(this).attr("id").replace(/del_/, ''),
        del_btn = $(this),
        tt_pageX = del_btn.offset().left - $(window).scrollLeft(),
        tt_pageY = del_btn.offset().top - $(window).scrollTop();

      if (opts.showWarning) {
        jQuery('<div />').append(field_warn_h3, opts.messages.field_removal_warning).dialog({
          modal: true,
          resizable: false,
          width: 300,
          dialogClass: "ite-warning",
          open: function (event, ui) {
            $(".ui-widget-overlay").css({
              'opacity': 0.0
            });
          },
          position: [tt_pageX - 282, tt_pageY - 178],
          buttons: [{
            text: opts.messages.yes,
            click: function () {
              $('#frm-' + delete_id + '-item').slideUp(250, function () {
                $(this).remove();
                helpers.save();
              });
              $(this).dialog('close');
            }
          }, {
            text: opts.messages.no,
            "class": "cancel",
            click: function () {
              $(this).dialog('close');
            }
          }]
        });
      } else {
        $('#frm-' + delete_id + '-item').slideUp(250, function () {
          $(this).remove();
          helpers.save();
        });
      }
    });

    // Attach a callback to toggle required asterisk
    $('#' + frmb_id).delegate('input.required', 'click', function () {
      var required_asterisk = $(this).parents("li:eq(0)").find(".required_asterisk");
      required_asterisk.toggle();
    });

    // Attach a callback to toggle roles visibility
    $('#' + frmb_id).delegate('input[name="enable_roles"]', 'click', function () {
      var roles = $(this).siblings("div.avail_roles"),
        enable_roles_cb = $(this);
      roles.slideToggle(250, function () {
        if (!enable_roles_cb.is(':checked')) {
          $('input[type="checkbox"]', roles).removeAttr('checked');
        }
      });
    });

    // Attach a callback to add new checkboxes
    $('#' + frmb_id).delegate('.add_ck', 'click', function () {
      $(this).parent().before(checkboxFieldHtml());
      return false;
    });

    $('#' + frmb_id).delegate('li.disabled .form-element', 'mouseenter', function () {
      helpers.disabledTT($(this));
    });

    // Attach a callback to add new options
    $('#' + frmb_id).delegate('.add_opt', 'click', function (e) {
      e.preventDefault();
      var is_multiple = $(this).parents(".fields").first().find('input[name="multiple"]')[0].checked,
        name = $(this).parents(".fields").find('.select_opt:eq(0)').attr("name");
      $(this).parents(".fields").first().find(".ol_opt_sortable").append(selectFieldHtml("", name, false, is_multiple));
      helpers.updateMultipleSelect();
    });

    // Attach a callback to close link
    $('#' + frmb_id).delegate('.close_field', 'click', function (e) {
      e.preventDefault();
      $(this).parents('li:eq(0)').find('.toggle-form').trigger('click');
    });

    // Attach a callback to add new radio fields
    $('#' + frmb_id).delegate('.add_rd', 'click', function (e) {
      e.preventDefault();
      $(this).parent().before(radioFieldHtml(false, $(this).parents('.frm-holder').attr('id')));
    });

    $('.frm-elements .fields .remove, .frmb .del-button').on('hover', function () {
      $(this).parents("li:eq(0)").toggleClass('delete');
    });

    // View XML
    $('#' + frmb_id + '-export-xml').click(function (e) {
      e.preventDefault();
      var xml = elem.val();
      $('<pre />').text(xml).dialog({
        modal: true,
        width: 720,
        dialogClass: "spigit-xml",
        overlay: {
          color: '#333333'
        }
      });
    });

    // View Field Vars
    $('#' + frmb_id + '-view-vars').click(function (e) {
      e.preventDefault();
      field_vars = "<table width='100%'>";
      field_vars += "<tr><td width='50%' height='30'><strong>" + opts.messages.field_vars + "</strong></td><td align='center'><strong>" + opts.messages.copy + "</strong></td></tr>";
      $(ul_obj).children("li").not('.disabled').each(function (i) {
        field_vars += "<tr><td>$__" + $("input[name='name']", $(this)).val() + "__</td><td align='center'><span id='" + $("input[name='name']", $(this)).val() + '_' + Math.random().toString(36).substr(2, 6) + "_var' class='copy_var clipboard' data-clipboard-text='$__" + $("input[name='name']", $(this)).val() + "__'></span></td></tr>";
      });
      field_vars += "</table>";

      $('<div />').html(field_vars).dialog({
        modal: true,
        width: 400,
        dialogClass: "spigit-field-vars",
        overlay: {
          color: '#333333'
        },
        open: function () {
          $(".copy_var").each(function () {
            var this_id = $(this).attr("id");
            var clip = new ZeroClipboard(document.getElementById(this_id), {
              moviePath: "/js/speui/ideatemplate/js/zeroclipboard/ZeroClipboard.swf"
            });
            clip.on("load", function (client) {
              client.on("complete", function (client, args) {
                $(".copy_var").removeClass("copied");
                $(this).addClass("copied");
              });
            });
          });
        }
      });
    });

    // Clear all fields in form editor
    $('#' + frmb_id + '-clear-all').click(function (e) {
      e.preventDefault();
      if (confirm(opts.messages.clear_all_message)) {
        $(ul_obj).empty();
        elem.val("");
        helpers.save();
        var values = {
          label: [opts.messages.description_field],
          name: ["content"],
          required: "true",
          description: opts.messages.mandatory
        };
        appendNewField("7", values);
        ul_obj.prepend(opts.disabled_fields.before);
        ul_obj.append(opts.disabled_fields.after);
      }
    });


    // Save Idea Template
    $('#' + frmb_id + '-save').click(function (e) {
      if ($(this).find(".ldkInlineEdit").length === 0) {
        e.preventDefault();
        if (!ul_obj.parent('.frmb_wrap').hasClass("edit_xml")) {
          helpers.save();
        }
        helpers.validateForm(e);
      }
    });


    var trigger_dev = false;
    // Super secret Developer Tools
    // if (spigitUserId === 1) {
      $(".save.speuiButton_v1").mouseover(function () {
        trigger_dev = true;
      }).mouseout(function () {
        trigger_dev = false;
      });
      $(document.documentElement).keydown(function (e) {
        var k = e.keyCode || e.which;
        if (k === 77 && trigger_dev) { // M key
          $(".action_links").toggle();
          $(".view_xml").toggle();
        }
      });
    // }
    // Toggle Developer Mode
    // if (spigitUserId === 1) {
      $('.dev_mode_link').click(function (e) {
        var dml = $(this),
          form_wrap = ul_obj.parent('.frmb_wrap');
        form_wrap.toggleClass("dev_mode");
        dml.parent().css("opacity", 1);
        dml.siblings(".action_links_inner").animate({
          width: "auto"
        }, 250);
        if (form_wrap.hasClass("dev_mode")) {
          dml.siblings(".action_links_inner").animate({
            "width": "400px"
          }, 250);
          dml.html(opts.messages.dev_mode + " " + opts.messages.on).animate({
            color: "#8CC63F"
          }, 250);
        } else {
          dml.siblings(".action_links_inner").animate({
            "width": 0
          }, 250, function () {
            dml.html(opts.messages.dev_mode + " " + opts.messages.off).animate({
              color: "#666666"
            }, 250);
          });
        }
      });
    // }

    // Toggle Edit Names
    $('#' + frmb_id + '-edit-names').click(function (e) {
      var form_wrap = ul_obj.parent('.frmb_wrap');
      $(this).toggleClass("active");
      $(".name_wrap", ul_obj).slideToggle(250, function () {
        form_wrap.toggleClass("edit_names");
      });
    });

    // Toggle Allow Select
    $('#' + frmb_id + '-allow-select').click(function (e) {
      var form_wrap = ul_obj.parent('.frmb_wrap');
      $(this).toggleClass("active");
      $(".allow_multi, .select_opt", ul_obj).slideToggle(250, function () {
        form_wrap.toggleClass("allow_select");
      });
    });

    // Toggle Edit XML
    $('#' + frmb_id + '-edit-xml').click(function (e) {
      var form_wrap = ul_obj.parent('.frmb_wrap');
      $(this).toggleClass("active");
      $('textarea.idea_template').show();
      $('.idea_template_wrap').slideToggle(250);
      form_wrap.toggleClass("edit_xml");
    });

    elem.parent().find('p[id*="ideaTemplate"]').remove();
    elem.wrap('<div class="idea_template_wrap"/>');
    elem.getTemplate();

  };


  $.fn.formBuilder = function (options) {
    var form = this;
    return form.each(function (i) {
      var element = $(this);
      if (element.data('formBuilder')) {
        return;
      }
      var formBuilder = new FormBuilder(this, options);
      element.data('formBuilder', formBuilder);

      // if ($.browser.msie && parseInt($.browser.version, 10) < 9) {
      //   var ie_style = '<style type="text/css">.frmb_wrap .frmb a.del-button, .frmb_wrap .frmb a.remove{ background-image:url(\'/img/bg/sprites/fresh.gif\'); border: 0 none; width:16px; height:16px; background-position: -139px -100px;}</style>';
      //   element.after(ie_style);
      // }
    });
  };
})(jQuery);

// toSpigitXML is a jQuery plugin that turns our form editor into Spigit XML
(function ($) {
  $.fn.toSpigitXML = function (options) {
    var defaults = {
      prepend: '',
      is_child: false,
      attributes: ['class']
    };
    var opts = $.extend(defaults, options);

    var serialStr = '';
    // Begin the core plugin
    this.each(function () {
      // var ul_obj = this;
      var li_count = 0;
      var c = 1;

      if ($(this).children().length >= 1) {
        serialStr += '<idea-template>\n\t<fields>';

        // build new xml
        $(this).children().each(function () {
          if (!($(this).hasClass("moving") || $(this).hasClass("disabled"))) {
            for (att = 0; att < opts.attributes.length; att++) {

              var required = $('#' + $(this).attr('id') + ' input.required').is(':checked') ? 'required="true" ' : 'required="false" ',
                multiple_checked = $('#' + $(this).attr('id') + ' input[name=multiple]').is(":checked"),
                multiple = multiple_checked ? 'style="multiple" ' : '',
                t = $(this).attr(opts.attributes[att]),
                type = 'type="' + t + '" ',
                f_id = $(this).attr('id'),
                f_name = 'name="' + $('#' + f_id + ' input.fld-name').val() + '" ',
                f_label = 'label="' + $('#' + f_id + ' input.fld-label').val() + '" ',
                role_vals = $.map($('#' + f_id + ' input.roles_field:checked'), function (n, i) {
                  return n.value;
                }).join(','),
                roles = (role_vals !== "" ? 'role="' + role_vals + '" ' : ""),
                desc = 'description="' + $('#' + f_id + ' input.fld-description').val() + '" ',
                max_length_val = $('#' + f_id + ' input.fld-max_length').val(),
                max_length = 'maxLength="' + (max_length_val !== undefined ? max_length_val : '') + '" ',
                f_slash = (t !== "6" && t !== "10" ? "/" : "");

              serialStr += '\n\t\t<field ' + f_name + f_label + multiple + roles + desc + (max_length_val !== '' ? (max_length_val !== undefined ? max_length : '') : '') + required + type + f_slash + '>';

              if (t === '6' || t === '10') {
                c = 1;
                $('#' + $(this).attr('id') + ' input[type=text][class=option]').each(function (i) {
                  if ($(this).attr('name') !== 'title') {
                    var selected = $(this).prev().is(":checked") ? ' selected="true"' : '';
                    serialStr += '\n\t\t\t<option' + selected + '>' + $(this).val() + '</option>';
                  }
                  c++;
                });
                serialStr += '\n\t\t</field>';
              }
            }
          }
          li_count++;
        });
        serialStr += '\n\t</fields>\n</idea-template>';
      } // if "$(this).children().length >= 1"

    });
    return (serialStr);
  };
})(jQuery);
