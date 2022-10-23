import Grid from "@mui/material/Grid";
import Image from "next/image";
import React, {useState} from "react";
import {Avatar, ImageList, ImageListItem, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import {PropsChildren} from "../../../type/PropsChildren";



//Подправить что бы выводился списком
const PetsDonats: React.FC<PropsChildren> = ({petsList}) => {
    const [isHover, setIsHover] = useState(false);
    const handleMouseOver = ()=>{
        setIsHover(true)

    }
    const handleMouseOut = ()=>{
        setIsHover(false)
    }

  return(
      <>
          <ImageList>
          {
              petsList.map((item)=>(
                  <ImageListItem
                      key={item.key}
                      onClick={handleMouseOver}
                      onMouseOut={handleMouseOut}
                      sx={{
                          marginTop: 2,
                          marginBottom: 2
                      }}>
                      { isHover ? (<>
                          <Avatar
                              src={item.img}
                              sx={{
                                  width: 250,
                                  height: 250
                              }}/>
                          <Typography>fsdsd</Typography>
                      </>) : (<>
                          <Avatar
                              src={item.img}
                              sx={{
                                  width: 250,
                                  height: 250
                              }}/>
                      </> ) }
                  </ImageListItem>
              ))
          }
          </ImageList>
      </>
  )
}

export default PetsDonats