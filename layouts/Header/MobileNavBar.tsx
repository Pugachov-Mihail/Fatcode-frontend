import React from 'react';
import { Drawer, Typography, List, ListItem } from '@mui/material';
import { LinkProps } from '../../types/UI/HeaderLinks';
import Link from "next/link";

// реализация ссылок для мобильной версии (при скрытии) - боковая правая панель
const MobiileNavBar: React.FC<LinkProps> = ({ links }) => {
  return (
    <Drawer anchor='right'>
      <List
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: 5,
        }}>
        {links.map((item) => (
          <ListItem><Link key={item.id} href={item.href}>
            {item.text}
          </Link></ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default MobiileNavBar;
