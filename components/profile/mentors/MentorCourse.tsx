import {ListItem, Typography} from "@mui/material";

type PropsList = {
    list: List[]
}

type List = {
    key: number,
    text: string
}

const MentorCourse = ({list}: PropsList) => {
    return(
        <>
            <Typography sx={{
                fontSize: 25,
                fontWeight: "bold",
                marginBottom: 2
            }}>
                Список курируемых курсов
            </Typography>
            {
                list.map(item=>(
                   <ListItem key={item.key}>
                       <Typography sx={{
                           color: "#BBC0CB",
                           fontSize: 20,
                           fontWeight: "bold",
                           marginLeft: -2,
                           "&: hover":{
                               color: "#69CB2D"
                           }
                       }}>
                           {item.text}
                       </Typography>
                   </ListItem>
                ))
            }
        </>
    )
}

export default MentorCourse