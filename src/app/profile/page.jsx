"use client";
import { UpdateModal } from "@/component/UpdateModal";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import React from "react";

const page = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  return (
    <div>
      <div className="flex justify-center mt-10">
        <div className="border w-90 text-center space-y-3 py-6 rounded-2xl shadow">
            <Avatar className="mx-auto h-20 w-20">
                <Avatar.Image
                alt="John Doe"
                referrerPolicy="no-referrer"
                src={user?.image}
                />
                <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
            </Avatar>
            <h2 className="font-semibold text-2xl">{user?.name}</h2>
            <h2 className="text-muted">{user?.email}</h2>

            <UpdateModal></UpdateModal>
            
        </div>
      </div>
    </div>
  );
};

export default page;
