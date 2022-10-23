import ProfileTitle from "../../components/profile/profile[id]/ProfileTitle";
import BackgoundUser from "../../layouts/ProfileBack/BackgoundUser";
import {Button, Typography} from "@mui/material";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import PetsDonats from "../../components/profile/mydonats/PetsDonats";


const Mydonats = () => {
    const petList = [
        {key: 1, img: "/assets/image/svg/Dog.svg", text: "fsd"},
        {key: 2, img: "/assets/image/svg/Dog.svg", text: "das"},
        {key: 3, img: "/assets/image/svg/Dog.svg", text: "fvcx"},
        {key: 4, img: "/assets/image/svg/Dog.svg", text: "fvc242x"},
        {key: 5, img: "/assets/image/svg/Dog.svg", text: "fvxcvgdrfs"},
    ]
  return(
      <>
        <BackgoundUser>
            <ProfileTitle text={"Мои донаты"}/>
            <Typography>
                Всё обучение на сайте предоставляется бесплатно и держится на команде отчаянных энтузиастов, однако, если Вам вдруг хочется подкинуть нашей команде пару копеек на кофе, хлеб и может даже что-то посерьезнее — мы будем бесконечно рады и поделим между всеми членами команды.
                Но если вдруг Вам не комфортно помогать голодным разрабам, то мы предлагаем альтернативу — помощь животным. Среди нас есть энтузиасты, которые лично выбирают конкретных животных и помогают им оплатить передержки, корм, операции, лекарства и прочее. Следы ваших донатов вы будете видеть на этой странице в качестве коротких фотоотчетов.
                Фотографии же сытых разрабов, мы вам не предоставим, увы.
                Удачи в обучении!
                И не забывайте про эту вкладочку - она дарит волшебство!
            </Typography>
            <Button sx={{
                width: 200,
                color: "#69CB2D",
                marginTop: 4,
                background: "white",
                fontWeight: "bold",
                borderRadius: 20,
                border: "1px solid #69CB2D",
                "&: hover":{
                    color: "white",
                    background: "#69CB2D",
                    border: "1px solid #69CB2D"
                }}}>
                Нашей команде
            </Button>
            <Button sx={{
                marginLeft: 5,
                width: 200,
                color: "#69CB2D",
                marginTop: 4,
                background: "white",
                fontWeight: "bold",
                borderRadius: 20,
                border: "1px solid #69CB2D",
                "&: hover":{
                    color: "white",
                    background: "#69CB2D",
                    border: "1px solid #69CB2D"
                }}}>
                Животным
            </Button>
            <Typography ml={73} sx={{
                color: "#BBC0CB",
                fontSize: 15
            }}>
                Ваши маленькие чудеса
            </Typography>
            <PetsDonats petsList={petList}/>
        </BackgoundUser>
      </>
  )
}

export default Mydonats