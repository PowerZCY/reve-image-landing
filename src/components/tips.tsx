export function Tips() {
  const tipColumns = [
    [
      {
        title: "Be Specific in Your Prompts",
        description:
          "When using Reve Image, the more specific your prompt, the better the results. Include details about style, lighting, mood, and composition to guide the AI toward your vision.",
      },
      {
        title: "Experiment with Different Styles",
        description:
          'Reve Image can generate images in various artistic styles. Try adding style descriptors like "oil painting," "digital art," "photorealistic," or "watercolor" to your prompts.',
      },
      {
        title: "Use Reference Artists",
        description:
          'Mentioning specific artists in your Reve Image prompts can help achieve particular aesthetics. For example, "in the style of Van Gogh" or "like a Wes Anderson film."',
      },
    ],
    [
      {
        title: "Iterate and Refine",
        description:
          "Don't be afraid to generate multiple images with Reve Image and refine your prompt based on the results. Each iteration brings you closer to your perfect image.",
      },
      {
        title: "Consider Composition Elements",
        description:
          'Include composition details in your Reve Image prompts, such as "close-up," "wide shot," "from above," or "symmetrical composition" to control the framing.',
      },
      {
        title: "Maximize Your Daily Allowance",
        description:
          "With Reve Image's generous 20 free images per day, plan your creative sessions to make the most of this allowance. Save your best results to build a personal inspiration library.",
      },
    ],
  ]

  return (
    <section id="tips" className="container mx-auto px-4 py-20 bg-gray-900/50 rounded-3xl my-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        Tips for Getting the Best Results with <span className="text-purple-500">Reve Image</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {tipColumns.map((column, colIndex) => (
          <div key={colIndex} className="space-y-8">
            {column.map((tip, tipIndex) => (
              <div key={tipIndex} className="space-y-4">
                <h3 className="text-2xl font-semibold">{tip.title}</h3>
                <p className="text-gray-400">{tip.description}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

