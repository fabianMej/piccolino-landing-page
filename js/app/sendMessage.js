var sendMessage = new Vue({
  el: '#sendMessage',
  data: {
    name: '',
    email: '',
    subjet: '',
    message: '',
    showError: false,
    successMessage: false
  },
  methods: {
    send: function() {
      console.log('click');
      // validate fields
      if (this.name.length > 0 && this.email.length > 0 && this.subjet.length > 0 && this.message.length > 0) {
        // show success event
        this.showError = false;
        this.successMessage = true;

        this.name = '';
        this.email = '';
        this.subjet = '';
        this.message = '';
      } else {
        this.showError = true;
        this.successMessage = false;
      }
    }
  }
})