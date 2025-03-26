export function Features() {
  const featureItems = [
    {
      title: "High-Quality Output",
      description: "Reve Image produces stunning, detailed images that rival professional artwork.",
      icon: "✨",
    },
    {
      title: "20 Free Images Daily",
      description: "Enjoy a generous daily allowance of 20 free images with your Reve Image account.",
      icon: "🎁",
    },
    {
      title: "Intuitive Prompting",
      description: "Our advanced AI understands natural language, making it easy to describe your vision.",
      icon: "💬",
    },
  ]

  return (
    <section id="features" className="container mx-auto px-4 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        Why Choose <span className="text-purple-500">Reve Image</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featureItems.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-purple-500/50 transition"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

