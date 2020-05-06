window.onload = function() {
    var searchInput = document.getElementById("search1");

    searchInput.onclick = function() {
        if (this.value == "请输入关键词")
            this.value = "";
    }

    searchInput.onblur = function() {
        if (this.value == "")
            this.value = "请输入关键词";
    }


}