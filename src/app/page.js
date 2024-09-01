
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Link from "next/link"

export default function Component() {
    return (
        (<div
            className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground relative">
            <div className="absolute inset-0 z-[-1] overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    className="min-w-full min-h-full w-auto h-auto z-[-1] object-cover">
                    <source
                        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                        type="video/mp4" />
                </video>
            </div>
            <header
                className="flex flex-col items-center justify-center gap-4 px-4 py-8 w-full max-w-md animate-fade-in">
                <Avatar className="w-20 h-20 border-2 border-primary animate-fade-in-up">
                    <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
                    <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="text-center w-full animate-fade-in-up">
                    <Link href="#" prefetch={false}>
                        <h1 className="text-2xl font-bold">About Me</h1>
                    </Link>
                    <p className="text-muted-foreground">
                        <a href="#" className="underline">
                            Download CV
                        </a>
                    </p>
                </div>
            </header>
            <div
                className="grid grid-cols-1 gap-4 px-4 w-full max-w-md animate-fade-in-up">
                <Link
                    href="#"
                    className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-primary text-primary-foreground font-medium transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 animate-fade-in-up"
                    prefetch={false}>
                    Services
                </Link>
                <Link
                    href="#"
                    className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-primary text-primary-foreground font-medium transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 animate-fade-in-up"
                    prefetch={false}>
                    About
                </Link>
                <Link
                    href="#"
                    className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-primary text-primary-foreground font-medium transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 animate-fade-in-up"
                    prefetch={false}>
                    Contact
                </Link>
                <Link
                    href="#"
                    className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-primary text-primary-foreground font-medium transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 animate-fade-in-up"
                    prefetch={false}>
                    My Projects
                </Link>
            </div>
        </div>)
    );
}
