import streamlit as st
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from mpl_toolkits.mplot3d import Axes3D

st.set_page_config(page_title="Saksham Mahnot - Portfolio", page_icon="🎨", layout="wide")

st.sidebar.title("📌 Navigation")
st.sidebar.markdown("---")
st.sidebar.write("Explore different sections of the portfolio.")
page = st.sidebar.radio("Go to", ["Home", "Skills", "Contact", "My Adidas Sales"])

if page == "Home":
    st.title("👋 Welcome to My Portfolio")
    st.header("I'm Saksham Mahnot - Developer & Researcher")
    st.write("Passionate about building innovative solutions in cybersecurity, IoT, and deep learning.")
    st.image("https://saksham0mahnot.github.io/portfolio/img/profile.jpg", width=250)
    st.markdown("""
        ## About Me
        - 🎓 Researcher in Cybersecurity & IoT
        - 💻 Skilled in Python, Machine Learning, Deep Learning
        - 🏆 Contributor to multiple open-source projects
        - 📖 Passionate about learning & innovation
        - 🎗️ Member of IEEE
    """)
    st.success("🚀 Let's build something amazing together!")

elif page == "Skills":
    st.title("💡 My Skills")
    st.text("✅ Python")
    st.text("✅ React")
    st.text("✅ JavaScript")
    st.text("✅ Java")
    st.text("✅ MySQL")
    st.text("✅ MongoDB")
    st.info("🚀 Always learning and improving!")

elif page == "Contact":
    #form
    st.title("📝 Feedback Form")
    st.write("Fill out the form below and click submit:")
    
    with st.form("Feedback Form"):
        name = st.text_input("Name:")
        email = st.text_input("Email:")
        age = st.number_input("Age:", min_value=0, max_value=100)
        feedback = st.text_area("Enter your feedback:")
        submits = st.form_submit_button("Submit Feedback")
    
    if submits:
        st.success("Form submitted successfully!")
        st.write(f"**Thank you** {name} **For your Lovely Feedback:** {feedback} **and Congratulations you are** {age} **year old now, soon contact your on this email id** {email} ")
        st.balloons()
        st.camera_input("Say Cheese!! Lets Capture this Movements")
    
    
    st.title("📬 Get in Touch")
    st.write("I'd love to hear from you! Feel free to reach out.")
    st.markdown("""
        - 📧 Email: [saksham@example.com](mailto:saksham.mahnot@gmail.com)
        - 💼 LinkedIn: [linkedin.com/in/saksham-mahnot](https://linkedin.com/in/saksham-mahnot)
        - 🐦 Twitter: [twitter.com/saksham_mahnot](https://twitter.com/saksham_mahnot)
        - 📝 GitHub: [github.com/saksham0mahnot](https://github.com/saksham0mahnot)
    """)

elif page == "My Adidas Sales":
    st.title("📊 My Adidas Sales")
    
    file_path = r".\Adidas US Sales Datasets.xlsx"
    data = pd.read_excel(file_path, sheet_name="Data Sales Adidas", skiprows=4)
    
    numeric_columns = ["Price per Unit", "Units Sold", "Total Sales", "Operating Profit", "Operating Margin" ]
    data[numeric_columns] = data[numeric_columns].apply(pd.to_numeric, errors='coerce')
    
    x_axis = st.selectbox("Select X-axis", numeric_columns, index=0)
    y_axis = st.selectbox("Select Y-axis", numeric_columns, index=1)
    
    chart = st.radio("Choose the chart type", ["Line Chart", "Bar Chart", "Scatter Plot", "Histogram", "Heatmap", "3D Bar Chart"])
    
    fig, ax = plt.subplots(figsize=(8, 6))
    
    if chart == "Line Chart":
        ax.plot(data[x_axis], data[y_axis], marker='o', linestyle='-')
        ax.set_title("Line Chart")
    
    elif chart == "Bar Chart":
        ax.bar(data[x_axis], data[y_axis], color='skyblue')
        ax.set_title("Bar Chart")
    
    elif chart == "Scatter Plot":
        ax.scatter(data[x_axis], data[y_axis], color="red")
        ax.set_title("Scatter Plot")
    
    elif chart == "Histogram":
        ax.hist(data[x_axis], bins=20, color='purple', alpha=0.7)
        ax.set_title("Histogram")
    
    elif chart == "Heatmap":
        fig, ax = plt.subplots(figsize=(8, 6))
        sns.heatmap(data[numeric_columns].corr(), annot=True, cmap='coolwarm', linewidths=0.5, ax=ax)
        ax.set_title("Heatmap")
    
    elif chart == "3D Bar Chart":
        fig = plt.figure(figsize=(8, 6))
        ax = fig.add_subplot(111, projection='3d')
        ax.bar(data[x_axis], data[y_axis], zs=0, zdir='y', color='blue', alpha=0.7)
        ax.set_xlabel(x_axis)
        ax.set_ylabel(y_axis)
        ax.set_title("🛠️ 3D Bar Chart")
    
    ax.set_xlabel(x_axis)
    ax.set_ylabel(y_axis)
    st.pyplot(fig)
