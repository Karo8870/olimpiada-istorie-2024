import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle
} from '@nextui-org/react';
import Image from 'next/image';
import React from 'react';

export default function AppNavbar() {
  return (
    <Navbar
      classNames={{
        base: 'bg-background'
      }}
      maxWidth={'full'}
      className='z-50'
    >
      <NavbarContent justify='start'>
        <NavbarMenuToggle className='sm:hidden' />
        <Link href='/'>
          <NavbarBrand>
            <Image
              src={'/logo.png'}
              alt={'logo'}
              width={60}
              height={60}
              className='h-auto w-auto'
            />
            <h1 className='pr-4 font-medium text-black'>
              Olimpiada națională de istorie 2024
            </h1>
          </NavbarBrand>
        </Link>
      </NavbarContent>

      <NavbarContent className='hidden gap-4 sm:flex' justify='center'>
        <NavbarItem>
          <Link className={'font-semibold'} color='foreground' href='/'>
            Concurs
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className={'font-semibold'} href='/' color={'foreground'}>
            Program
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className={'font-semibold'} color='foreground' href='/'>
            Informații
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className={'font-semibold'} color='foreground' href='/'>
            Jurnal
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className={'font-semibold'} color='foreground' href='/'>
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'></NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <Link className='w-full' href='/' size='lg'>
            Concurs
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className='w-full' href='/' size='lg'>
            Program
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className='w-full' href='/' size='lg'>
            Informații
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className='w-full' href='/' size='lg'>
            Jurnal
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className='w-full' href='/' size='lg'>
            Contact
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
