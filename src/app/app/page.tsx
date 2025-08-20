import React, { useRef, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

// ... other imports

const Page = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [selectedResolution, setSelectedResolution] = useState<string | null>(null);

    const handleSaveImageClick = () => {
        setIsDialogOpen(true);
    };

    const handleResolutionSelect = (resolution: string) => {
        setSelectedResolution(resolution);
        setIsDialogOpen(false);
        saveCompositeImage(resolution);
    };

    const saveCompositeImage = (resolution: string) => {
        console.log(`Saving image in ${resolution} resolution`);
        // Your existing image saving logic
    };

    return (
        <>
            {/* Existing JSX code */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                    onClick={handleSaveImageClick}
                    className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 
                               text-white font-semibold shadow-lg rounded-xl px-6 py-3 
                               transition-all duration-500 hover:shadow-2xl hover:scale-105"
                >
                    Save Image
                </Button>
            </motion.div>

            <AnimatePresence>
                {isDialogOpen && (
                    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                        <DialogContent
                            className="max-w-md rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-black 
                                       text-white shadow-2xl border border-white/10 p-6 backdrop-blur-xl"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 50 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            >
                                <DialogHeader>
                                    <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                        Select Resolution
                                    </DialogTitle>
                                </DialogHeader>

                                <div className="flex flex-col space-y-3 mt-4">
                                    {["720p", "HD", "4K"].map((res, i) => (
                                        <motion.div
                                            key={res}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <Button
                                                onClick={() => handleResolutionSelect(res)}
                                                className="w-full py-3 rounded-xl font-semibold 
                                                           bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                                                           text-white shadow-md hover:shadow-xl transition-all duration-500"
                                            >
                                                {res}
                                            </Button>
                                        </motion.div>
                                    ))}
                                </div>

                                <DialogFooter className="mt-6">
                                    <DialogClose asChild>
                                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                            <Button
                                                variant="outline"
                                                className="w-full border border-gray-500/50 text-gray-200 
                                                           hover:bg-gray-800 hover:text-white rounded-xl transition-all duration-500"
                                            >
                                                Cancel
                                            </Button>
                                        </motion.div>
                                    </DialogClose>
                                </DialogFooter>
                            </motion.div>
                        </DialogContent>
                    </Dialog>
                )}
            </AnimatePresence>
        </>
    );
};

export default Page;
