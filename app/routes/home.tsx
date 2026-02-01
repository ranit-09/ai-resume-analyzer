import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { usePuterStore } from '~/lib/puter'
import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart feeedback for your dream" },
  ];
}

export default function Home() {


    const { auth} = usePuterStore();
    const navigate = useNavigate();

    useEffect(() => {
        if(auth.isAuthenticated) navigate('/auth?next=/');
    }, [auth.isAuthenticated])




  return <main className="bg-[url('/images/bg-main.svg)] bg-cover">
    <Navbar/>
    <section className="main-section">
      <div className="page-heading">
        <h1>Track Your Applications & Resume Ratings</h1>
        <h2>Review your submissions and check AI-powered feeedback</h2>
      </div>
    </section>

    
  </main>
}
