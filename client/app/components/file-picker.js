import Ember from 'ember';
import FilePicker from 'ember-cli-file-picker/components/file-picker';

const {
  Component,
  computed,
  observer,
  run: {
    bind
  },
  String: {
    htmlSafe
  },
  assert,
  $
} = Ember;

export default FilePicker.extend({

  updatePreview: function(files) {
    if (this.get('multiple')) {
      // TODO
    } else {
      this.clearPreview();
      this.$('.file-picker__progress').show();

      this.readFile(files[0], 'readAsDataURL')
        .then(bind(this, 'addPreviewImage'));

      this.$('.file-picker__dropzone').hide();
    }

    this.$('.file-picker__preview').show();
  },

  addPreviewImage: function(file) {
    var image = this.$(
      '<img src="' + file.data + '" style="height:35%;width:35%;" class=" center-block img-thumbnail file-picker__preview__image ' +
      (this.get('multiple') ? 'multiple' : 'single') + '">');

    this.hideProgress();
    this.$('.file-picker__preview').append(image);
  },
});
