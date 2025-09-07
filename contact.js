// Tunggu sampai halaman selesai dimuat
document.addEventListener("DOMContentLoaded", function () {
    // Ambil form berdasarkan ID
    const contactForm = document.getElementById("contact-form");

    // Tambahkan event listener ketika form disubmit
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Mencegah reload halaman

        // Ambil data input dari form
        const formData = {
            from_name: contactForm.from_name.value,
            reply_to: contactForm.reply_to.value,
            message: contactForm.message.value
        };

        // Kirim email menggunakan EmailJS
        emailjs.send("service_1xxn7d6", "template_f0xmgo9", formData)
            .then(function (response) {
                alert("✅ Pesan berhasil dikirim! Terima kasih sudah menghubungi saya.");
                console.log("SUCCESS!", response.status, response.text);
                contactForm.reset(); // Reset form setelah sukses
            }, function (error) {
                alert("❌ Pesan gagal dikirim! Coba lagi nanti.");
                console.error("FAILED...", error);
            });
    });
});
