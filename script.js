function scheduleAppointment() {
    const phone = "5511987433948";
    const message = "Olá, vim pelo site, gostaria de agendar um horário";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
  }
  