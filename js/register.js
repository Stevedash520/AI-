window.onload = function() {
    var tel = document.querySelector("#tel");
    //手机号判断 正则表达式
    var telreg = /^1[3|5|7|8]\d{9}$/;
    var num = document.querySelector("#num");
    var numreg = /^\d{6}$/;
    var password = document.querySelector("#password");
    var passwordreg = /^\w{6,16}$/
    var confirm_password = document.querySelector("#confirm_password");

    function judge(id, reg) {
        id.onblur = function() {
            if (reg.test(this.value)) {
                // console.log('正确的');
                //nextElementSibling下一个兄弟  所以在html中记得有一个空的兄弟，图片以背景的形式放入
                this.nextElementSibling.className = 'right';
                this.nextElementSibling.innerHTML = '<i class="right"></i> 恭喜您输入正确';
            } else {
                // console.log('不正确');
                this.nextElementSibling.className = 'right';
                this.nextElementSibling.innerHTML = '<i class="err"></i> 格式不正确，请从新输入 ';
            }
            // if (reg.test(id.value)) {
            //     var p = document.createElement("p");
            //     p.innerHTML = "输入正确";
            //     p.className = "right";
            //     var i = document.createElement("i");
            //     i.innerHTML = '<img src="img/error_03.png" alt=""></img>';
            //     i.className = "errno";
            //     id.parentNode.appendChild(i);
            //     id.parentNode.appendChild(p);
            // } else {
            //     var p = document.createElement("p");
            //     p.innerHTML = "输入错误";
            //     p.className = "err";
            //     var i = document.createElement("i");
            //     i.innerHTML = '<img src="img/error_03.png" alt=""></img>';
            //     i.className = "errno";
            //     id.parentNode.appendChild(i);
            //     id.parentNode.appendChild(p);
            // }
        }
    }
    confirm_password.addEventListener("blur", function() {
        if (this.value == password.value) {
            this.nextElementSibling.className = 'right';
            this.nextElementSibling.innerHTML = '<i class="right"></i> 恭喜您输入正确';
        } else {
            // console.log('不正确');
            this.nextElementSibling.className = 'right';
            this.nextElementSibling.innerHTML = '<i class="err"></i> 俩次密码不一致，请重新输入 ';
        }
    })

    judge(tel, telreg);
    judge(num, numreg);
    judge(password, passwordreg);




}