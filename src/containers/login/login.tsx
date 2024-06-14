"use client";
import React, { useState } from "react";
import { Input } from "@headlessui/react";
import { Login, SignUp } from "@/services/auth";
import { useAuthStore } from "@/store/auth/auth.store";

const LoginPage = () => {
    const [name, setName] = React.useState("");
    const [password, setPassword] = React.useState("");
    const user = useAuthStore((state) => state.user);
    const setUser = useAuthStore((state) => state.setUser);
    const onLoginSubmit = async () => {
        const res = await Login(name, password);
        if (res) {
            setUser(res);
        }
    };

    const onCreateUserSubmit = async () => {
        const res = await SignUp(name, password);
        if (res) {
            setUser(res);
        }
    };
    return (
        <div className="text-title flex flex-col gap-2">
            {user && <h1 className="text-center text-white">{user?.name}</h1>}

            <Input onChange={(e) => setName(e.target.value)} placeholder="name" />
            <Input onChange={(e) => setPassword(e.target.value)} placeholder="password" />
            <button onClick={onLoginSubmit}>onLoginSubmit</button>

            <hr className="border-t border-white w-full" />

            <Input onChange={(e) => setName(e.target.value)} placeholder="name" />
            <Input onChange={(e) => setPassword(e.target.value)} placeholder="password" />
            <button onClick={onCreateUserSubmit}>onCreateUserSubmit</button>
        </div>
    );
};

export default LoginPage;
