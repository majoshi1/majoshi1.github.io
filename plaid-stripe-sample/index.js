var linkHandler = Plaid.create({
  env: 'sandbox',
  clientName: 'Stripe/Plaid Test',
  key: 'a9536dd5db33d7bbbdb096c56a1593',
  product: ['auth'],
  selectAccount: true,
  onSuccess: function(public_token, metadata) {
    console.log('public_token: ' + public_token);
    console.log('metadata: ' + JSON.stringify(metadata));

    // Send the public_token and account ID to your app server.
    var $form = $('<form>', {
      'action': '//httpbin.org/post',
      'method': 'POST'
    }).append($('<input>', {
      'name': 'public_token',
      'value': public_token,
      'type': 'hidden'
    })).append($('<input>', {
      'name': 'account_id',
      'value': metadata.account.id,
      'type': 'hidden'
    }));
    $(document.body).append($form);
    $form.submit();
  },
});

// Trigger the Link UI
$("#linkButton").click(function() {
  linkHandler.open();
});