(() => {
  const app = {
    items: [], // length 0
    initialize() {
      this.cacheElements();
      this.buildUI();
      this.addListeners();
    },
    buildUI() {
      // add html element on application start
    },
    addListeners() {
      this.$btnAdd.addEventListener(
        "click",
        (e) => {
          this.items.push(`Item ${this.items.length + 1}`);
          this.buildListUI();
        },
        false
      );

      this.$btnRemove.addEventListener(
        "click",
        (e) => {
          this.items.pop();
          this.buildListUI();
        },
        false
      );
    },
    buildListUI() {
      // 1. ["Item 1", "Item 2"]; origineel
      // 2. ["<li>Item 1</li>", "<li>Item 2</li>"]; resultaat map
      // 3. "<li>Item 1</li><li>Item 2</li>" resultaat join
      const html = this.items
        .map((item) => {
          return `<li>${item}</li>`;
        })
        .join("");

      this.$list.innerHTML = html;
    },
    cacheElements() {
      this.$btnAdd = document.querySelector("#add");
      this.$btnRemove = document.querySelector("#remove");
      this.$list = document.querySelector("#list");
    },
  };

  app.initialize();
})();
