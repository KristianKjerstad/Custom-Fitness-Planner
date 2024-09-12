"use client"
import Footer from "@/components/Footer"
import { Header } from "@/components/Header"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CameraIcon, ClockIcon, DiffIcon, FilterIcon } from "lucide-react"
import { useMemo, useState } from "react"

const Workouts = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [filters, setFilters] = useState({
        difficulty: [] as string[],
        equipment: [] as string[],
        duration: [] as string[],
    })
    const [showMoreWorkouts, setShowMoreWorkouts] = useState(false)
    const workouts = [
        {
            id: 1,
            name: "Beginner Full Body Workout",
            image: "/customize.jpg",
            description: "A full-body workout designed for beginners to build strength and endurance.",
            difficulty: "beginner",
            equipment: ["dumbbells"],
            duration: "45 minutes",
        },
        {
            id: 2,
            name: "Intermediate HIIT Workout",
            image: "/customize.jpg",
            description: "A high-intensity interval training workout to burn calories and improve cardiovascular fitness.",
            difficulty: "intermediate",
            equipment: ["bodyweight"],
            duration: "30 minutes",
        },
        {
            id: 3,
            name: "Advanced Strength Training",
            image: "/customize.jpg",
            description: "A challenging strength-focused workout to build muscle and increase overall strength.",
            difficulty: "advanced",
            equipment: ["barbell", "dumbbells"],
            duration: "60 minutes",
        },
        {
            id: 4,
            name: "Yoga for Flexibility",
            image: "/customize.jpg",
            description: "A yoga-based workout to improve flexibility, balance, and mindfulness.",
            difficulty: "beginner",
            equipment: ["yoga mat"],
            duration: "60 minutes",
        },
        {
            id: 5,
            name: "Cardio Blast",
            image: "/customize.jpg",
            description: "A high-energy cardio workout to get your heart rate up and burn calories.",
            difficulty: "intermediate",
            equipment: ["treadmill", "stationary bike"],
            duration: "45 minutes",
        },
        {
            id: 6,
            name: "Core Strengthening",
            image: "/customize.jpg",
            description: "A focused workout to build a strong and stable core.",
            difficulty: "intermediate",
            equipment: ["exercise ball", "resistance bands"],
            duration: "30 minutes",
        },
    ]
    const filteredWorkouts = useMemo(() => {
        return workouts.filter((workout) => {
            const searchMatch =
                workout.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                workout.description.toLowerCase().includes(searchTerm.toLowerCase())
            const difficultyMatch = filters.difficulty.length === 0 || filters.difficulty.includes(workout.difficulty)
            const equipmentMatch =
                filters.equipment.length === 0 || filters.equipment.some((item) => workout.equipment.includes(item))
            const durationMatch = filters.duration.length === 0 || filters.duration.includes(workout.duration)
            return searchMatch && difficultyMatch && equipmentMatch && durationMatch
        })
    }, [workouts, searchTerm, filters])
    return (
        <div>
            <Header />
            <section className="bg-background py-12 md:py-24 lg:py-32">
                <div className="px-8 md:px-10">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl">All Workouts</h2>
                            <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                Browse our library of custom workout plans to find the perfect fit for your fitness goals.
                            </p>
                        </div>
                        <div className="flex flex-col gap-8 sm:flex-row sm:items-center pb-8 max-w-[1400px]">
                            <Input
                                type="text"
                                placeholder="Search workouts..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="flex-1"
                            />
                            <Accordion type="single" collapsible >
                                <AccordionItem value="filters">
                                    <AccordionTrigger className="flex items-center gap-2">
                                        <FilterIcon className="h-5 w-5" />
                                        Filters
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className="grid gap-4">
                                            <div>
                                                <h3 className="text-lg font-semibold">Difficulty</h3>
                                                <div className="grid gap-2">
                                                    <Label className="flex items-center gap-2">
                                                        <Checkbox
                                                            checked={filters.difficulty.includes("beginner")}
                                                            onCheckedChange={(e) => {
                                                                setFilters((prev) => ({
                                                                    ...prev,
                                                                    difficulty: e.target.checked
                                                                        ? [...prev.difficulty, "beginner"]
                                                                        : prev.difficulty.filter((d) => d !== "beginner"),
                                                                }))
                                                            }}
                                                        />
                                                        Beginner
                                                    </Label>
                                                    <Label className="flex items-center gap-2">
                                                        <Checkbox
                                                            checked={filters.difficulty.includes("intermediate")}
                                                            onCheckedChange={(e) => {
                                                                setFilters((prev) => ({
                                                                    ...prev,
                                                                    difficulty: e.target.checked
                                                                        ? [...prev.difficulty, "intermediate"]
                                                                        : prev.difficulty.filter((d) => d !== "intermediate"),
                                                                }))
                                                            }}
                                                        />
                                                        Intermediate
                                                    </Label>
                                                    <Label className="flex items-center gap-2">
                                                        <Checkbox
                                                            checked={filters.difficulty.includes("advanced")}
                                                            onCheckedChange={(e) => {
                                                                setFilters((prev) => ({
                                                                    ...prev,
                                                                    difficulty: e.target.checked
                                                                        ? [...prev.difficulty, "advanced"]
                                                                        : prev.difficulty.filter((d) => d !== "advanced"),
                                                                }))
                                                            }}
                                                        />
                                                        Advanced
                                                    </Label>
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold">Equipment</h3>
                                                <div className="grid gap-2">
                                                    <Label className="flex items-center gap-2">
                                                        <Checkbox
                                                            checked={filters.equipment.includes("dumbbells")}
                                                            onCheckedChange={(e) => {
                                                                setFilters((prev) => ({
                                                                    ...prev,
                                                                    equipment: e.target.checked
                                                                        ? [...prev.equipment, "dumbbells"]
                                                                        : prev.equipment.filter((e) => e !== "dumbbells"),
                                                                }))
                                                            }}
                                                        />
                                                        Dumbbells
                                                    </Label>
                                                    <Label className="flex items-center gap-2">
                                                        <Checkbox
                                                            checked={filters.equipment.includes("barbell")}
                                                            onCheckedChange={(e) => {
                                                                setFilters((prev) => ({
                                                                    ...prev,
                                                                    equipment: e.target.checked
                                                                        ? [...prev.equipment, "barbell"]
                                                                        : prev.equipment.filter((e) => e !== "barbell"),
                                                                }))
                                                            }}
                                                        />
                                                        Barbell
                                                    </Label>
                                                    <Label className="flex items-center gap-2">
                                                        <Checkbox
                                                            checked={filters.equipment.includes("bodyweight")}
                                                            onCheckedChange={(e) => {
                                                                setFilters((prev) => ({
                                                                    ...prev,
                                                                    equipment: e.target.checked
                                                                        ? [...prev.equipment, "bodyweight"]
                                                                        : prev.equipment.filter((e) => e !== "bodyweight"),
                                                                }))
                                                            }}
                                                        />
                                                        Bodyweight
                                                    </Label>
                                                    <Label className="flex items-center gap-2">
                                                        <Checkbox
                                                            checked={filters.equipment.includes("yoga mat")}
                                                            onCheckedChange={(e) => {
                                                                setFilters((prev) => ({
                                                                    ...prev,
                                                                    equipment: e.target.checked
                                                                        ? [...prev.equipment, "yoga mat"]
                                                                        : prev.equipment.filter((e) => e !== "yoga mat"),
                                                                }))
                                                            }}
                                                        />
                                                        Yoga Mat
                                                    </Label>
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold">Duration</h3>
                                                <div className="grid gap-2">
                                                    <Label className="flex items-center gap-2">
                                                        <Checkbox
                                                            checked={filters.duration.includes("30 minutes")}
                                                            onCheckedChange={(e) => {
                                                                setFilters((prev) => ({
                                                                    ...prev,
                                                                    duration: e.target.checked
                                                                        ? [...prev.duration, "30 minutes"]
                                                                        : prev.duration.filter((d) => d !== "30 minutes"),
                                                                }))
                                                            }}
                                                        />
                                                        30 minutes
                                                    </Label>
                                                    <Label className="flex items-center gap-2">
                                                        <Checkbox
                                                            checked={filters.duration.includes("45 minutes")}
                                                            onCheckedChange={(e) => {
                                                                setFilters((prev) => ({
                                                                    ...prev,
                                                                    duration: e.target.checked
                                                                        ? [...prev.duration, "45 minutes"]
                                                                        : prev.duration.filter((d) => d !== "45 minutes"),
                                                                }))
                                                            }}
                                                        />
                                                        45 minutes
                                                    </Label>
                                                    <Label className="flex items-center gap-2">
                                                        <Checkbox
                                                            checked={filters.duration.includes("60 minutes")}
                                                            onCheckedChange={(e) => {
                                                                setFilters((prev) => ({
                                                                    ...prev,
                                                                    duration: e.target.checked
                                                                        ? [...prev.duration, "60 minutes"]
                                                                        : prev.duration.filter((d) => d !== "60 minutes"),
                                                                }))
                                                            }}
                                                        />
                                                        60 minutes
                                                    </Label>
                                                </div>
                                            </div>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            {filteredWorkouts.slice(0, showMoreWorkouts ? filteredWorkouts.length : 4).map((workout) => (
                                <Card key={workout.id} className="bg-background p-4 shadow-xl">
                                    <img
                                        src="/placeholder.svg"
                                        alt={workout.name}
                                        width={400}
                                        height={300}
                                        className="rounded-lg object-cover aspect-video"
                                    />
                                    <CardContent className="space-y-2">
                                        <h3 className="text-xl font-bold">{workout.name}</h3>
                                        <p className="text-muted-foreground">{workout.description}</p>
                                        <div className="flex items-center gap-2">
                                            <DiffIcon className="h-5 w-5" />
                                            <span className="text-sm font-medium">{workout.difficulty}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CameraIcon className="h-5 w-5" />
                                            <span className="text-sm font-medium">{workout.equipment.join(", ")}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <ClockIcon className="h-5 w-5" />
                                            <span className="text-sm font-medium">{workout.duration}</span>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                        {filteredWorkouts.length > 4 && (
                            <div className="flex justify-center mt-6 pt-8">
                                <Button onClick={() => setShowMoreWorkouts(!showMoreWorkouts)} className="w-full max-w-md">
                                    {showMoreWorkouts ? "Show Less" : "Load More"}
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Workouts