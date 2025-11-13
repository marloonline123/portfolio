import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import { EyeIcon, TrashIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

import Pagination from '@/components/shared/pagination';
import SearchBar from '@/components/shared/search-bar';
import DeleteMessageModal from '@/components/dashboard/messages/delete-message-modal';
import { Message } from '@/types/message';
import { PaginatedData } from '@/types/global';
import AppLayout from '@/layouts/app-layout';

interface Props {
    messages: PaginatedData<Message>;
    search?: string;
}

export default function Index({ messages, search = '' }: Props) {
    const [deletingMessage, setDeletingMessage] = useState<Message | null>(null);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);

    const handleDelete = (message: Message) => {
        setDeletingMessage(message);
        setIsDeleteOpen(true);
    };

    return (
        <AppLayout>
            <Head title="Messages" />

            <div className="flex flex-col gap-6 p-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Messages</h1>
                </div>

                <div className="flex items-center gap-4">
                    <SearchBar
                        key={search}
                        placeholder="Search messages..."
                        initialValue={search}
                        routeName="dashboard.messages.index"
                    />
                </div>

                <div className="rounded-md border overflow-hidden">
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="">#</TableHead>
                                    <TableHead className="min-w-[150px]">Name</TableHead>
                                    <TableHead className="min-w-[200px]">Email</TableHead>
                                    <TableHead className="min-w-[200px]">Subject</TableHead>
                                    <TableHead className="min-w-[150px]">Date</TableHead>
                                    <TableHead className="w-[120px]">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {messages.data.length === 0 ? (
                                    <TableRow>
                                        <TableCell colSpan={6} className="text-center py-4">
                                            No messages found.
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    messages.data.map((message, index) => (
                                        <TableRow key={message.id}>
                                            <TableCell>{1 + index}</TableCell>
                                            <TableCell className="font-medium">{message.name}</TableCell>
                                            <TableCell>{message.email}</TableCell>
                                            <TableCell>{message.subject}</TableCell>
                                            <TableCell>{new Date(message.created_at).toLocaleDateString()}</TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-1 sm:gap-2">
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        asChild
                                                        className="h-8 w-8 p-0 sm:h-9 sm:w-auto sm:px-3"
                                                    >
                                                        <Link href={route('dashboard.messages.show', message.id)}>
                                                            <EyeIcon className="h-4 w-4" />
                                                            <span className="sr-only sm:not-sr-only sm:ml-2">View</span>
                                                        </Link>
                                                    </Button>
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        onClick={() => handleDelete(message)}
                                                        className="h-8 w-8 p-0 sm:h-9 sm:w-auto sm:px-3 text-destructive hover:text-destructive"
                                                    >
                                                        <TrashIcon className="h-4 w-4" />
                                                        <span className="sr-only sm:not-sr-only sm:ml-2">Delete</span>
                                                    </Button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                )}
                            </TableBody>
                        </Table>
                    </div>
                </div>

                <Pagination meta={messages.meta} />
            </div>

            <DeleteMessageModal
                message={deletingMessage}
                isOpen={isDeleteOpen}
                onOpenChange={(open) => {
                    setIsDeleteOpen(open);
                    if (!open) setDeletingMessage(null);
                }}
            />
        </AppLayout>
    );
}