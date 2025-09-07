const btn = document.getElementById('button');


    // Ambil form berdasarkan ID
    document.getElementById("contact-form").addEventListener

    // Tambahkan event listener ketika form disubmit
    ("submit", function(event) {

        event.preventDefault(); // Mencegah reload halaman

        btn.value = 'sending ...';
        const serviceID ='service_1xxn7d6';
        const templateID ='template_f0xmgo9';
        
        emailjs.sendform(serviceID, templateID, this)
        then(() => {
            btn.value = 'Send Email';
            alert('Email berhasil Terkirim');
        }, (err) => {
            btn.value = 'Send Email';
            alert(JSON.stringify(err));
        });

        // // Ambil data input dari form
        // const formData = {
        //     from_name: contactForm.from_name.value,
        //     reply_to: contactForm.reply_to.value,
        //     message: contactForm.message.value
        // };

        // // Kirim email menggunakan EmailJS
        // emailjs.send("service_1xxn7d6", "template_f0xmgo9", formData)
        //     .then(function (response) {
        //         alert("✅ Pesan berhasil dikirim! Terima kasih sudah menghubungi saya.");
        //         console.log("SUCCESS!", response.status, response.text);
        //         contactForm.reset(); // Reset form setelah sukses
        //     }, function (error) {
        //         alert("❌ Pesan gagal dikirim! Coba lagi nanti.");
        //         console.error("FAILED...", error);
        //     });

