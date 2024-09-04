'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, ChevronRight, Code, Cpu, Globe, Zap } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <header className="px-4 lg:px-6 h-16 flex items-center backdrop-blur-sm bg-gray-900/50 sticky top-0 z-50">
        <Link className="flex items-center justify-center" href="#">
          <Zap className="h-6 w-6 text-blue-400" />
          <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">Soya Da Yoot Inc</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-blue-400 transition-colors" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:text-blue-400 transition-colors" href="#">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:text-blue-400 transition-colors" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:text-blue-400 transition-colors" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 px-4 md:px-6">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-teal-400 to-purple-500">
                Revolutionize Your Workflow
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl dark:text-gray-300">
                Boost productivity and streamline your business processes with our cutting-edge SaaS solution.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button className="bg-blue-500 hover:bg-blue-600 text-white">Get Started</Button>
              <Button variant="outline" className="text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white">Learn More</Button>
            </motion.div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400"
            >
              Features
            </motion.h2>
            <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
              {[
                { icon: Globe, title: "Global Access", color: "blue" },
                { icon: Cpu, title: "AI-Powered", color: "teal" },
                { icon: Code, title: "API Integration", color: "purple" }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className={`bg-gray-900 border-gray-800 hover:border-${feature.color}-500 transition-colors`}>
                    <CardHeader>
                      <feature.icon className={`w-12 h-12 mb-4 text-${feature.color}-400`} />
                      <CardTitle className={`text-2xl font-bold text-${feature.color}-400`}>{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">
                        {feature.title === "Global Access" && "Access your data from anywhere in the world, at any time."}
                        {feature.title === "AI-Powered" && "Leverage the power of artificial intelligence to optimize your workflows."}
                        {feature.title === "API Integration" && "Seamlessly integrate with your existing tools and services."}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">Pricing</h2>
            <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
              <Card className="bg-gray-900 border-gray-800 hover:border-blue-500 transition-colors">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-blue-400">Basic</CardTitle>
                  <CardDescription className="text-gray-400">For small teams</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-white mb-4">$29<span className="text-xl text-gray-400">/mo</span></p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center"><CheckCircle2 className="mr-2 h-5 w-5 text-blue-400" /> 5 team members</li>
                    <li className="flex items-center"><CheckCircle2 className="mr-2 h-5 w-5 text-blue-400" /> 10GB storage</li>
                    <li className="flex items-center"><CheckCircle2 className="mr-2 h-5 w-5 text-blue-400" /> Basic support</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-500 hover:bg-blue-600">Choose Plan</Button>
                </CardFooter>
              </Card>
              <Card className="bg-gray-900 border-gray-800 hover:border-teal-500 transition-colors">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-teal-400">Pro</CardTitle>
                  <CardDescription className="text-gray-400">For growing businesses</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-white mb-4">$99<span className="text-xl text-gray-400">/mo</span></p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center"><CheckCircle2 className="mr-2 h-5 w-5 text-teal-400" /> Unlimited team members</li>
                    <li className="flex items-center"><CheckCircle2 className="mr-2 h-5 w-5 text-teal-400" /> 100GB storage</li>
                    <li className="flex items-center"><CheckCircle2 className="mr-2 h-5 w-5 text-teal-400" /> Priority support</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-teal-500 hover:bg-teal-600">Choose Plan</Button>
                </CardFooter>
              </Card>
              <Card className="bg-gray-900 border-gray-800 hover:border-purple-500 transition-colors">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-purple-400">Enterprise</CardTitle>
                  <CardDescription className="text-gray-400">For large organizations</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-white mb-4">Custom</p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center"><CheckCircle2 className="mr-2 h-5 w-5 text-purple-400" /> Unlimited everything</li>
                    <li className="flex items-center"><CheckCircle2 className="mr-2 h-5 w-5 text-purple-400" /> 24/7 premium support</li>
                    <li className="flex items-center"><CheckCircle2 className="mr-2 h-5 w-5 text-purple-400" /> Custom integrations</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-purple-500 hover:bg-purple-600">Contact Sales</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400"
            >
              Testimonials
            </motion.h2>
            <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
              {[
                { text: "This SaaS has completely transformed our business operations. We've seen a 50% increase in productivity since implementing it.", author: "John Doe, CEO of TechCorp", color: "blue" },
                { text: "The customer support is outstanding. They're always there to help and have gone above and beyond our expectations.", author: "Jane Smith, CTO of InnovateCo", color: "teal" },
                { text: "We've been able to scale our operations effortlessly thanks to this platform. It's been a game-changer for us.", author: "Mike Johnson, Founder of ScaleUp", color: "purple" }
              ].map((testimonial, index) => (
                <motion.div
                  key={testimonial.author}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gray-900 border-gray-800">
                    <CardContent className="mt-4">
                      <p className="text-gray-300 mb-4">
                        "{testimonial.text}"
                      </p>
                      <p className={`font-semibold text-${testimonial.color}-400`}>- {testimonial.author}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="py-6 w-full shrink-0 px-4 md:px-6 border-t border-gray-800">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">© 2024 Soya Da Yoot Inc. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6">
            <Link className="text-sm text-gray-400 hover:text-blue-400 transition-colors" href="#">
              Terms of Service
            </Link>
            <Link className="text-sm text-gray-400 hover:text-blue-400 transition-colors" href="#">
              Privacy Policy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}