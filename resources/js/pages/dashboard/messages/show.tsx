import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { ArrowLeftIcon, MailIcon, UserIcon, CalendarIcon, MessageSquareIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { Message } from '@/types/message';

interface Props {
    message: Message;
}

export default function Show({ message }: Props) {
    return (
        <AppLayout>
            <Head title={`Message from ${message.name}`} />

            <div className="flex flex-col gap-6 p-4">
                <div className="flex items-center gap-4">
                    <Button variant="outline" size="sm" asChild>
                        <Link href={route('dashboard.messages.index')}>
                            <ArrowLeftIcon className="h-4 w-4 mr-2" />
                            Back to Messages
                        </Link>
                    </Button>
                    <h1 className="text-2xl font-bold">Message Details</h1>
                </div>

                <div className="grid gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <MessageSquareIcon className="h-5 w-5" />
                                {message.subject}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3">
                                    <UserIcon className="h-4 w-4 text-muted-foreground" />
                                    <div>
                                        <p className="text-sm font-medium">From</p>
                                        <p className="text-sm text-muted-foreground">{message.name}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MailIcon className="h-4 w-4 text-muted-foreground" />
                                    <div>
                                        <p className="text-sm font-medium">Email</p>
                                        <a
                                            href={`mailto:${message.email}`}
                                            className="text-sm text-muted-foreground hover:text-primary"
                                        >
                                            {message.email}
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 md:col-span-2">
                                    <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                                    <div>
                                        <p className="text-sm font-medium">Received</p>
                                        <p className="text-sm text-muted-foreground">
                                            {new Date(message.created_at).toLocaleString()}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Message Content</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="prose prose-sm max-w-none">
                                <p className="whitespace-pre-wrap">{message.content}</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AppLayout>
    );
}