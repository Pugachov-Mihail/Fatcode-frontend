import React from "react";
import Link from "next/link";
import { Typography, Stack, Box } from "@mui/material";
import { LinkProps } from "../../../types/UI/HeaderLinks";

const HeaderLinks: React.FC<LinkProps> = ({links})=>{
  return (
      <>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          columnGap: 5,
          whiteSpace: 'nowrap',
          '& > a:hover': {color: '#69CB2D', transition: '.5s'}
        }}>
          {links.map((item) => (
            <Link key={item.id} href={item.href}>
              {item.text}
            </Link>
          ))}
        </Box>
      </>
  );
}

export default HeaderLinks;