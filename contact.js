import emailjs from '@emailjs/browser';
// Initialize EmailJS

(function(){
    emailjs.init("MYnAc_1cwCn16l3Qa"); // Public key sudah benar
})();

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Show loading
    const button = this.querySelector('button');
    const originalText = button.textContent;
    button.textContent = 'Sending...';
    button.disabled = true;
    
    // PERBAIKAN: Template_ID harus diisi!
    // Ganti 'YOUR_TEMPLATE_ID' dengan template ID real dari dashboard
    emailjs.sendForm('service_1xxn7d6', 'template_f0xmgo9')
        .then(function() {
            alert('Message sent successfully!');
            document.getElementById('contact-form').reset();
        }, function(error) {
            alert('Failed to send message. Please try again.');
            console.error('EmailJS error:', error);
        })
        .finally(function() {
            button.textContent = originalText;
            button.disabled = false;
        });
});

// Pre-filled data untuk form
const defaultMessage = "";

// Set default value saat form load
document.addEventListener('DOMContentLoaded', function() {
    const messageField = document.querySelector('textarea[name="message"]');
    if (messageField) {
        messageField.value = defaultMessage;
    }
    
    // PERBAIKAN: Hanya set subject jika field subject ada
    const subjectField = document.querySelector('input[name="subject"]');
    if (subjectField) {
        subjectField.value = "Lamaran Magang - Mahasiswa Informatika Universitas Krisnadwipayana";
    }
});

// Optional: Jika mau pakai method send() instead of sendForm()
function sendEmailAlternative(formElement) {
    const formData = {
        from_name: formElement.from_name.value,
        reply_to: formElement.reply_to.value, 
        message: formElement.message.value,
        subject: 'Portfolio Contact - ' + formElement.from_name.value
    };
    
    return emailjs.send('service_1xxn7d6', 'template_f0xmgo9', formData);
}