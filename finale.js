const text = document.querySelector(".start")
const name = "من أنا ؟؟؟"
text.style.color = "#000000ff"

let index = 0      /*  كتابة العبارة تدريجيا حرفا بحرف ذهابا و ايابا*/
let d = false      // false = كتابة | true = حذف
function typing() {
    if (!d) {      //!d = (d= false)
        text.textContent=name.slice(0 , index ++)
        if (index > name.length) {
            d = true
            setTimeout (typing , 100)
            return
        }
    }  else {
        text.textContent = name.slice(0 , index --) 
        if (index == 0 ) {
            d = false
        }
    }
        setTimeout(typing , 100)   

        }
typing(); 
