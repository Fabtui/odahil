const previewImageOnFileSelect = () => {
  const inputs = document.querySelectorAll('#photo-input')
  if (inputs) {
    inputs.forEach(input => {
      const id = input.classList.value.slice(-1);
      const previewContainer = document.querySelector(`#photo-preview-${id}`);
      console.log(previewContainer)
      const displayPreview = (input) => {
        console.log(input)
        if (input.files && input.files[0]) {
          const reader = new FileReader();
          reader.onload = (event) => {
            console.log(event.currentTarget.result)
            previewContainer.src = event.currentTarget.result;
          }
          reader.readAsDataURL(input.files[0])
          previewContainer.classList.remove('hidden');
        }
      }

      input.addEventListener('change', () => {
        console.log(previewContainer)
        displayPreview(input);
      })
    })
  }
}

export { previewImageOnFileSelect };
