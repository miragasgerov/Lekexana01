// =========================
// CONTACT FORM
// =========================

const orderForm = document.getElementById("orderForm");

const formMessage = document.getElementById("formMessage");


// =========================
// FORMDA DƏYİŞİKLİK OLDUQDA
// MESAJI GİZLƏT
// =========================

orderForm.addEventListener("input", function() {

    formMessage.style.display = "none";

});


// =========================
// CONTACT FORM SUBMIT
// =========================

orderForm.addEventListener("submit", function(event) {

    // Formun səhifəni yeniləməsinin qarşısını alır
    event.preventDefault();


    // =========================
    // FORM MƏLUMATLARINI GÖTÜR
    // =========================

    const name =
        document.getElementById("name").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const service =
        document.getElementById("service").value;

    const message =
        document.getElementById("message").value.trim();


    // =========================
    // AD YOXLAMASI
    // =========================

    if (name === "") {

        formMessage.textContent =
            "Zəhmət olmasa adınızı daxil edin.";

        formMessage.style.display = "block";

        return;
    }


    // =========================
    // TELEFON BOŞDUR?
    // =========================

    if (phone === "") {

        formMessage.textContent =
            "Zəhmət olmasa telefon nömrənizi daxil edin.";

        formMessage.style.display = "block";

        return;
    }


    // =========================
    // TELEFON YOXLAMASI
    // =========================

    const phoneRegex =
        /^(?:\+994|0)(50|51|55|70|77|99|10|60|90)\d{7}$/;


    if (!phoneRegex.test(phone)) {

        formMessage.textContent =
            "Zəhmət olmasa düzgün Azərbaycan telefon nömrəsi daxil edin.";

        formMessage.style.display = "block";

        return;
    }


    // =========================
    // XİDMƏT YOXLAMASI
    // =========================

    if (service === "Xidmət seçin") {

        formMessage.textContent =
            "Zəhmət olmasa xidmət seçin.";

        formMessage.style.display = "block";

        return;
    }


    // =========================
    // WHATSAPP MESAJI
    // =========================

    const whatsappMessage =
        "Salam, Lekexana-dan sifariş vermək istəyirəm.\n\n" +
        "Ad: " + name + "\n" +
        "Telefon: " + phone + "\n" +
        "Xidmət: " + service + "\n" +
        "Mesaj: " + message;


    // =========================
    // WHATSAPP NÖMRƏSİ
    // =========================

    const whatsappNumber =
        "994500000000";


    // =========================
    // WHATSAPP URL
    // =========================

    const whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(whatsappMessage);


    // =========================
    // WHATSAPP AÇ
    // =========================

    window.open(
        whatsappURL,
        "_blank"
    );


    // =========================
    // UĞUR MESAJI
    // =========================

    formMessage.textContent =
        "Sifarişiniz WhatsApp-a yönləndirildi ✓";

    formMessage.style.display = "block";


    // =========================
    // FORMU TƏMİZLƏ
    // =========================

    orderForm.reset();

});


// ==================================================
// PRICING — SİFARİŞ ET DÜYMƏLƏRİ
// ==================================================


// Bütün .order-button düymələrini tapırıq

const orderButtons =
    document.querySelectorAll(".order-button");


// Hər bir düyməyə ayrıca click event veririk

orderButtons.forEach(function(button) {


    button.addEventListener("click", function(event) {

        // <a href="#"> linkinin normal davranışını dayandırırıq

        event.preventDefault();


        // =========================
        // XİDMƏTİ GÖTÜR
        // =========================

        const service =
            button.getAttribute("data-service");


        // =========================
        // WHATSAPP NÖMRƏSİ
        // =========================

        const whatsappNumber =
            "994703544144";


        // =========================
        // MESAJ
        // =========================

        const whatsappMessage =
            "Salam, Lekexana. " +
            service +
            " xidməti üçün sifariş vermək istəyirəm.";


        // =========================
        // WHATSAPP URL
        // =========================

        const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(whatsappMessage);


        // =========================
        // WHATSAPP AÇ
        // =========================

        window.open(
            whatsappURL,
            "_blank"
        );

    });

});



// =========================
// SCROLL ANIMATIONS
// =========================

const scrollElements =
    document.querySelectorAll(".scroll-animate");


const observer =
    new IntersectionObserver(
        function(entries) {

            entries.forEach(function(entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );


scrollElements.forEach(function(element) {

    observer.observe(element);

});

// =========================
// STAGGER ANIMATION
// =========================

const staggerItems =
    document.querySelectorAll(".stagger-item");


const staggerObserver =
    new IntersectionObserver(
        function(entries) {

            entries.forEach(function(entry) {

                if (entry.isIntersecting) {

                    const items =
                        document.querySelectorAll(".stagger-item");

                    items.forEach(function(item, index) {

                        setTimeout(function() {

                            item.classList.add("show");

                        }, index * 120);

                    });

                    staggerObserver.disconnect();

                }

            });

        },
        {
            threshold: 0.15
        }
    );


staggerItems.forEach(function(item) {

    staggerObserver.observe(item);

});


// =========================
// BEFORE / AFTER SLIDER
// =========================

const beforeAfterSlider =
    document.querySelector(".before-after-slider");

const beforeImageWrapper =
    document.querySelector(".before-image-wrapper");

const sliderLine =
    document.querySelector(".slider-line");


beforeAfterSlider.addEventListener("input", function() {

    const value = beforeAfterSlider.value;

    beforeImageWrapper.style.width =
        value + "%";

    sliderLine.style.left =
        value + "%";

});



// =========================
// STATISTICS COUNTER
// =========================

const statNumbers =
    document.querySelectorAll(".stat-number");

const statObserver =
    new IntersectionObserver(
        function(entries) {

            entries.forEach(function(entry) {

                if (entry.isIntersecting) {

                    const counter =
                        entry.target;

                    const target =
                        Number(
                            counter.getAttribute("data-target")
                        );

                    let current = 0;

                    const duration = 1500;
                    const startTime = performance.now();

                    function updateCounter(currentTime) {

                        const elapsed =
                            currentTime - startTime;

                        const progress =
                            Math.min(
                                elapsed / duration,
                                1
                            );

                        current =
                            Math.floor(
                                progress * target
                            );

                        if (target === 5000) {
                            counter.textContent =
                                current + "+";
                        }

                        else if (target === 98) {
                            counter.textContent =
                                current + "%";
                        }

                        else if (target === 5) {
                            counter.textContent =
                                current + "+";
                        }

                        else if (target === 24) {
                            counter.textContent =
                                current + "h";
                        }

                        if (progress < 1) {

                            requestAnimationFrame(
                                updateCounter
                            );

                        } else {

                            if (target === 5000) {
                                counter.textContent = "5000+";
                            }

                            else if (target === 98) {
                                counter.textContent = "98%";
                            }

                            else if (target === 5) {
                                counter.textContent = "5+";
                            }

                            else if (target === 24) {
                                counter.textContent = "24h";
                            }

                        }
                    }

                    requestAnimationFrame(
                        updateCounter
                    );

                    statObserver.unobserve(counter);
                }

            });

        },
        {
            threshold: 0.5
        }
    );


statNumbers.forEach(function(counter) {

    statObserver.observe(counter);

});



// =========================
// FAQ ACCORDION
// =========================

const faqItems =
    document.querySelectorAll(".faq-item");

faqItems.forEach(function(item) {

    const button =
        item.querySelector(".faq-question");

    button.addEventListener("click", function() {

        faqItems.forEach(function(otherItem) {

            if (otherItem !== item) {
                otherItem.classList.remove("active");
            }

        });

        item.classList.toggle("active");

    });

});