var reco = new WebSpeechRecognition();
reco.statusText('status');
reco.statusImage('status_img');
reco.finalResults('input_field');
reco.continuous = true;

// Handler when user clicks microphone button.
function microphoneButton() {
  reco.lang = select_dialect.value;
  reco.toggleStartStop();
}
