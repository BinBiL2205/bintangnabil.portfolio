    // const btn = document.getElementById('button');


    // // Ambil form berdasarkan ID
    // document.getElementById("contact-form").addEventListener

    // // Tambahkan event listener ketika form disubmit
    // ("submit", function(event) {

    //     event.preventDefault(); // Mencegah reload halaman

    //     btn.value = 'sending ...';

    //     const serviceID ='service_1xxn7d6';
    //     const templateID ='template_f0xmgo9';
    //     const autoReplyTemplate = "template_oyevwq9";

        
    //     emailjs.sendForm(serviceID, templateID, this)
    //     .then(() => {
    //         // Kirim auto-reply ke pengirim
    //         return emailjs.sendForm(serviceID, autoReplyTemplate, form);
    //     })
    //     .then(() => {
    //         btn.value = 'Send Email';
    //         alert('Email berhasil Terkirim');
    //     }, (err) => {
    //         btn.value = 'Send Email';
    //         alert(JSON.stringify(err));
    //     });
    // });

    document.addEventListener("DOMContentLoaded", function () {
        const btn = document.getElementById("button");
        const form = document.getElementById("contact-form");
    
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            btn.value = "Sending...";
    
            const serviceID = "service_1xxn7d6";
            const templateID = "template_f0xmgo9";
            const autoReplyTemplate = "template_oyevwq9";
    
            // Kirim email ke kamu
            emailjs.sendForm(serviceID, templateID, form)
                .then(() => {
                    // Kirim auto-reply ke pengirim
                    return emailjs.sendForm(serviceID, autoReplyTemplate, form);
                })
                .then(() => {
                    btn.value = "Send Email";
                    alert("✅ Pesan berhasil dikirim dan auto-reply terkirim!");
                    form.reset();
                })
                .catch((err) => {
                    btn.value = "Send Email";
                    alert("❌ Gagal mengirim email: " + JSON.stringify(err));
                });
        });
    });
    