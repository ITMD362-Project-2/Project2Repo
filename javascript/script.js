function show_alert() {
    if(!confirm("Thank you for joining our team. We will stay in contact with you?")) {
      return false;
    }
    this.form.submit();
  }
  
