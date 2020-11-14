package gmibank_team06.runners;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;
@RunWith(Cucumber.class)
@CucumberOptions(
        plugin =

                {"html:target/default-cucumber-reports",
                        "json:target/json-reports/cucumber.json",
                        "junit:target/xml-report/cucumber.xml"

                },
        features ="src/test/resources/features",
        glue ="gmibank_team06/step_definitions",
        tags ="@gmiLogin_US_005",
        dryRun = false



)

public class Login_Runner {
}
