'use client'
import Link from 'next/link'
import './navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link href="/" className="nav-link">
          HOME
        </Link>
        <Link href="/conversor/moeda" className="nav-link">
          MOEDA
        </Link>
        <Link href="/conversor/comprimento" className="nav-link">
          COMPRIMENTO
        </Link>
        <Link href="/conversor/temperatura" className="nav-link">
          TEMPERATURA
        </Link>
      </div>
    </nav>
  )
}