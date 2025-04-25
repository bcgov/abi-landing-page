import React from 'react'
import Link from 'next/link'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const RequestsPage = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">
                Analytics & Business Intelligence Requests
            </h1>

            {/* Requests Info Section */}
            <div className="mb-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                    Submit a Request
                </h2>
                <p className="text-gray-700 mb-2">
                    Use the form below to submit requests for analytics and
                    business intelligence services.
                </p>
            </div>

            {/* Request options */}
            <h2 className="text-2xl font-semibold mb-4">Available Forms</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-200 border border-gray-200 hover:border-blue-300">
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 h-2"></div>
                    <CardHeader>
                        <CardTitle className="text-xl font-semibold text-gray-800">
                            Analytics Request Form
                        </CardTitle>
                        <CardDescription>
                            Submit a new Analytics or Business Intelligence
                            request
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Link
                            href="https://forms.office.com/r/5whL7G48Eu"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button variant="bcgov" className="w-full">
                                Access Form
                            </Button>
                        </Link>
                    </CardContent>
                </Card>

                <Card className="overflow-hidden hover:shadow-lg transition-all duration-200 border border-gray-200 hover:border-blue-300">
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 h-2"></div>
                    <CardHeader>
                        <CardTitle className="text-xl font-semibold text-gray-800">
                            Staff Update Form
                        </CardTitle>
                        <CardDescription>
                            Request for a staff update or change
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Link
                            href="https://google.ca"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button variant="bcgov" className="w-full">
                                Access Form
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default RequestsPage
