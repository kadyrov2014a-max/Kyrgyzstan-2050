
const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const opened = nav.classList.toggle("open");

    menuButton.textContent = opened ? "✕" : "☰";
    menuButton.setAttribute("aria-expanded", String(opened));
    menuButton.setAttribute(
      "aria-label",
      opened ? "Закрыть меню" : "Открыть меню"
    );
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.textContent = "☰";
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

const plans = {
  waste: {
    icon: "♻",
    title: "Узнай, что принимают рядом",
    text: "Проверь, какие материалы принимают в твоём городе. Обсуди со взрослым, как правильно передать их на переработку. Не вся упаковка обязательно перерабатывается.",
    meta: "15–20 минут · без расходов"
  },

  water: {
    icon: "≈",
    title: "Начни беречь воду",
    text: "Обрати внимание, где дома можно избежать лишнего расхода воды. Закрывай кран, когда он не нужен, и сообщай взрослым о замеченных протечках.",
    meta: "Один день наблюдений"
  },

  energy: {
    icon: "ϟ",
    title: "Используй энергию разумно",
    text: "Выключай свет, когда он не нужен. Вместе с семьёй проверь, какие привычки помогают не расходовать электричество напрасно. Не трогай электропроводку.",
    meta: "10 минут · без расходов"
  },

  community: {
    icon: "✳",
    title: "Предложи экологическую акцию",
    text: "Обсуди с одноклассниками одну полезную инициативу: например, уменьшение одноразовой упаковки на школьном мероприятии. Сначала согласуй план с учителем.",
    meta: "20 минут на планирование"
  }
};

const roleNotes = {
  student: "Твой первый шаг — узнать больше и попробовать самому.",
  family: "Обсуди идею с семьёй и выберите действие вместе.",
  school: "Согласуй план с учителем и правилами школы.",
  community: "Обсуди идею с местным сообществом и ответственными взрослыми."
};

const makePlan = document.getElementById("makePlan");

if (makePlan) {
  makePlan.addEventListener("click", () => {
    const topic = document.getElementById("topic").value;
    const role = document.getElementById("role").value;

    const plan = plans[topic] || plans.waste;
    const roleNote = roleNotes[role] || roleNotes.student;

    document.getElementById("planIcon").textContent = plan.icon;
    document.getElementById("planTitle").textContent = plan.title;
    document.getElementById("planText").textContent =
      plan.text + " " + roleNote;
    document.getElementById("planMeta").textContent = plan.meta;
  });
}
