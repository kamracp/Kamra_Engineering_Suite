interface AIRecommendationPanelProps {
  motorPower: number;
  beltWidth: number;
  inclineAngle: number;
  warningCount: number;
}

const AIRecommendationPanel = ({
  motorPower,
  beltWidth,
  inclineAngle,
  warningCount,
}: AIRecommendationPanelProps) => {

  const recommendations: string[] = [];

  /*
    POWER
  */

  if (motorPower > 75) {

    recommendations.push(
      "Consider VFD for smooth starting and energy savings."
    );

  }

  /*
    BELT WIDTH
  */

  if (beltWidth >= 1400) {

    recommendations.push(
      "Heavy-duty conveyor detected. Steel cord belt recommended."
    );

  }

  /*
    INCLINE
  */

  if (inclineAngle > 18) {

    recommendations.push(
      "Steep incline conveyor detected. Chevron or sidewall belt may improve performance."
    );

  }

  /*
    WARNINGS
  */

  if (warningCount > 2) {

    recommendations.push(
      "Engineering warnings are high. Detailed design review recommended."
    );

  }

  /*
    DEFAULT
  */

  if (
    recommendations.length === 0
  ) {

    recommendations.push(
      "System configuration appears stable and suitable for industrial operation."
    );

  }

  return (

    <div className="bg-gradient-to-r from-green-700 to-blue-700 p-6 rounded-3xl">

      <h2 className="text-2xl font-bold mb-5">
        AI Engineering Recommendations
      </h2>

      <div className="space-y-4">

        {recommendations.map(
          (
            recommendation,
            index
          ) => (

            <div
              key={index}
              className="bg-black/20 p-4 rounded-2xl"
            >

              <div className="flex items-start gap-3">

                <div className="text-2xl">
                  🤖
                </div>

                <div>

                  <h3 className="font-semibold mb-1">
                    AI Suggestion
                  </h3>

                  <p className="text-sm">
                    {recommendation}
                  </p>

                </div>

              </div>

            </div>

          )
        )}

      </div>

    </div>

  );
};

export default AIRecommendationPanel;