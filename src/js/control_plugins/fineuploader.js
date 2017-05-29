/**
 * Fineuploader class - render the fineuploader tool (https://fineuploader.com) in place of the traditional file upload widget
 * For assistance with further configuring Fine Uploader in your application, please refer to:
 * https://docs.fineuploader.com/branch/master/api/options-ui.html
 *
 * If you wish to use your own installation of fineuploader, refer to here:
 *   - https://docs.fineuploader.com/quickstart/01-getting-started.html
 *   - You can download from here: https://fineuploader.com/customize
 *   - You can specify the location of your javascript & css in opts.controlConfig.file
 *   - The 'js' option should point to the jquery.fine-uploader.min.js file (note this is the jQuery plugin version)
 *
 *   E.g. var opts = {
 *    // other formbuilder options here
 *
 *    controlConfig: {
 *      file: {
 *        js: '/path/to/jquery.fine-uploader.min.js',
 *        css: '/path/to.css',
 *        handler: '/path/to/handler.php',
 *
 *        // other fine uploader configuration options here
 *      }
 *    }
 *  };
 *
 * This plugin is by default configured to use the 'Traditional' build, but you can easily reconfigure by passing appropriate Fine Uploader configuration options to controlConfig.file.
 * A simple php upload handler endpoint can be found here: https://github.com/FineUploader/php-traditional-server. To use this for your handler, simply set the controlConfig.fineuploader.handler option to be '/path/to/php-traditional-server/endpoint.php'
 *
 * If you wish to define a custom uploader handler URL, define controlConfig.file.handler in the formbuilder options. Defaults to /upload
 * If you wish to define a custom template for the interface, this can be defined in controlConfig.file.template. It defaults to the gallery template provided by the Fineuploader project
 */

// configure the class for runtime loading
if (!window.fbControls) window.fbControls = [];
window.fbControls.push(function(controlClass) {
  /**
   * Fine uploader class
   */
  class controlFineUpload extends controlClass {

    /**
     * Class configuration - return the icons & label related to this control
     * @return definition object
     */
    static get definition() {
      return {
        i18n: {
          default: 'File Upload'
        }
      };
    }

    /**
     * javascript & css to load
     */
    configure() {
      this.js = this.classConfig.js || '//cdnjs.cloudflare.com/ajax/libs/file-uploader/5.14.2/jquery.fine-uploader/jquery.fine-uploader.min.js';
      this.css = this.classConfig.css || '//cdnjs.cloudflare.com/ajax/libs/file-uploader/5.14.2/jquery.fine-uploader/fine-uploader-gallery.min.css';
      this.handler = this.classConfig.handler || '/upload';

      // fineuploader template that needs to be defined for the UI
      let template = this.classConfig.template || `
        <div class="qq-uploader-selector qq-uploader qq-gallery" qq-drop-area-text="Drop files here">
          <div class="qq-total-progress-bar-container-selector qq-total-progress-bar-container">
            <div role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" class="qq-total-progress-bar-selector qq-progress-bar qq-total-progress-bar"></div>
          </div>
          <div class="qq-upload-drop-area-selector qq-upload-drop-area" qq-hide-dropzone>
            <span class="qq-upload-drop-area-text-selector"></span>
          </div>
          <div class="qq-upload-button-selector qq-upload-button">
            <div>Upload a file</div>
          </div>
          <span class="qq-drop-processing-selector qq-drop-processing">
                    <span>Processing dropped files...</span>
                    <span class="qq-drop-processing-spinner-selector qq-drop-processing-spinner"></span>
                </span>
          <ul class="qq-upload-list-selector qq-upload-list" role="region" aria-live="polite" aria-relevant="additions removals">
            <li>
              <span role="status" class="qq-upload-status-text-selector qq-upload-status-text"></span>
              <div class="qq-progress-bar-container-selector qq-progress-bar-container">
                <div role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" class="qq-progress-bar-selector qq-progress-bar"></div>
              </div>
              <span class="qq-upload-spinner-selector qq-upload-spinner"></span>
              <div class="qq-thumbnail-wrapper">
                <img class="qq-thumbnail-selector" qq-max-size="120" qq-server-scale>
              </div>
              <button type="button" class="qq-upload-cancel-selector qq-upload-cancel">X</button>
              <button type="button" class="qq-upload-retry-selector qq-upload-retry">
                <span class="qq-btn qq-retry-icon" aria-label="Retry"></span>
                Retry
              </button>
    
              <div class="qq-file-info">
                <div class="qq-file-name">
                  <span class="qq-upload-file-selector qq-upload-file"></span>
                  <span class="qq-edit-filename-icon-selector qq-btn qq-edit-filename-icon" aria-label="Edit filename"></span>
                </div>
                <input class="qq-edit-filename-selector qq-edit-filename" tabindex="0" type="text">
                <span class="qq-upload-size-selector qq-upload-size"></span>
                <button type="button" class="qq-btn qq-upload-delete-selector qq-upload-delete">
                  <span class="qq-btn qq-delete-icon" aria-label="Delete"></span>
                </button>
                <button type="button" class="qq-btn qq-upload-pause-selector qq-upload-pause">
                  <span class="qq-btn qq-pause-icon" aria-label="Pause"></span>
                </button>
                <button type="button" class="qq-btn qq-upload-continue-selector qq-upload-continue">
                  <span class="qq-btn qq-continue-icon" aria-label="Continue"></span>
                </button>
              </div>
            </li>
          </ul>
    
          <dialog class="qq-alert-dialog-selector">
            <div class="qq-dialog-message-selector"></div>
            <div class="qq-dialog-buttons">
              <button type="button" class="qq-cancel-button-selector">Close</button>
            </div>
          </dialog>
    
          <dialog class="qq-confirm-dialog-selector">
            <div class="qq-dialog-message-selector"></div>
            <div class="qq-dialog-buttons">
              <button type="button" class="qq-cancel-button-selector">No</button>
              <button type="button" class="qq-ok-button-selector">Yes</button>
            </div>
          </dialog>
    
          <dialog class="qq-prompt-dialog-selector">
            <div class="qq-dialog-message-selector"></div>
            <input type="text">
            <div class="qq-dialog-buttons">
              <button type="button" class="qq-cancel-button-selector">Cancel</button>
              <button type="button" class="qq-ok-button-selector">Ok</button>
            </div>
          </dialog>
        </div>
      </div>`;
      this.fineTemplate = $('<div/>')
          .attr('id', 'qq-template')
          .html(template);
    }

    /**
     * build a div DOM element with id
     * @return {Object} DOM Element to be injected into the form.
     */
    build() {
      return this.markup('div', '', {id: this.config.name});
    }

    /**
     * onRender callback
     */
    onRender() {

      // we need to know where the server handler file located. I.e. where to we send the upload POST to?
      // to set this, define controlConfig.file.handler in the formbuilder options
      // defaults to '/upload'
      delete this.classConfig.endpoint;
      let config = $.extend({
        request: {
          endpoint: this.handler
        },
        deleteFile: {
          enabled: true,
          endpoint: this.handler
        },
        chunking: {
          enabled: true,
          concurrent: {
            enabled: true
          },
          success: {
            endpoint: this.handler + '?done'
          }
        },
        resume: {
          enabled: true
        },
        retry: {
          enableAuto: true,
          showButton: true
        },
        template: this.fineTemplate
      }, this.classConfig);
      $('#' + this.config.name).fineUploader(config);
    }
  }

  // overload the file 'type' to use this uploader instead
  controlClass.register('file', controlFineUpload);
  return controlFineUpload;
});
