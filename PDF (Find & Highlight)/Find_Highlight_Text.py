import fitz  # PyMuPDF
import tkinter as tk
from tkinter import ttk, filedialog, messagebox
import threading
import os

class PDFHighlighter:
    def __init__(self, root):
        self.root = root
        self.root.title("PDF Highlighter")
        self.root.geometry("600x300")
        self.root.resizable(True, True)

        # Configure grid for layout
        self.root.columnconfigure(0, weight=1)
        self.root.columnconfigure(1, weight=3)
        self.root.columnconfigure(2, weight=1)
        self.root.columnconfigure(3, weight=1)

        self.pdf_path = None

        # General padding for widgets
        padding = {'padx': 10, 'pady': 5}

        # Select PDF file label and button
        tk.Label(root, text="Select PDF file:").grid(row=0, column=0, sticky=tk.W, **padding)
        self.select_pdf_button = tk.Button(root, text="Select PDF", command=self.select_pdf)
        self.select_pdf_button.grid(row=0, column=2, sticky=tk.EW, **padding)
        self.selected_pdf_label = tk.Label(root, text="No file selected", foreground="grey")
        self.selected_pdf_label.grid(row=0, column=1, sticky=tk.W, **padding)

        # Search entry
        tk.Label(root, text="Enter word(s) to search (comma-separated):").grid(row=1, column=0, sticky=tk.W, **padding)
        self.search_entry = tk.Entry(root)
        self.search_entry.grid(row=1, column=1, sticky=tk.EW, **padding)

        # Highlight color selection
        tk.Label(root, text="Select highlight color:").grid(row=2, column=0, sticky=tk.W, **padding)
        self.color_options = {"Red": [1, 0, 0], "Yellow": [1, 1, 0], "Green": [0, 1, 0], "Blue": [0, 0, 1]}
        self.color_var = tk.StringVar(value=list(self.color_options.keys())[0])
        self.color_dropdown = ttk.Combobox(root, textvariable=self.color_var, values=list(self.color_options.keys()))
        self.color_dropdown.grid(row=2, column=1, sticky=tk.EW, **padding)

        # Highlight button
        self.highlight_button = tk.Button(root, text="Highlight", command=lambda: threading.Thread(target=self.highlight, daemon=True).start())
        self.highlight_button.grid(row=3, column=1, sticky=tk.EW, **padding)

    def select_pdf(self):
        self.pdf_path = filedialog.askopenfilename(filetypes=[("PDF Files", "*.pdf")])
        if self.pdf_path:
            file_name = self.pdf_path.split('/')[-1]
            self.selected_pdf_label.config(text=file_name, foreground="black")

    def highlight(self):
        if not self.pdf_path:
            messagebox.showerror("Error", "Please select a PDF file.")
            return

        search_text = self.search_entry.get().strip()
        if not search_text:
            messagebox.showerror("Error", "Please enter a word to search.")
            return

        search_terms = [term.strip() for term in search_text.split(',')]
        color_name = self.color_var.get()
        color = self.color_options[color_name]

        try:
            pdf_document = fitz.open(self.pdf_path)
            for page_num in range(len(pdf_document)):
                page = pdf_document.load_page(page_num)
                for term in search_terms:
                    text_instances = page.search_for(term)
                    for inst in text_instances:
                        annot = page.add_highlight_annot(inst)
                        annot.set_colors(stroke=color)
                        annot.update()

            initial_save_path = filedialog.asksaveasfilename(defaultextension=".pdf", filetypes=[("PDF Files", "*.pdf")])
            
            # Auto-increment filename if it already exists
            output_path = initial_save_path
            if os.path.exists(output_path):
                base_name, extension = os.path.splitext(initial_save_path)
                counter = 1
                while os.path.exists(output_path):
                    output_path = f"{base_name}_{counter}{extension}"
                    counter += 1

            if output_path:
                pdf_document.save(output_path, incremental=False, encryption=fitz.PDF_ENCRYPT_KEEP)
                messagebox.showinfo("Success", f"Highlighting done. Check '{output_path}'.")
            pdf_document.close()
        except Exception as e:
            messagebox.showerror("Error", f"An error occurred: {e}")

if __name__ == "__main__":
    root = tk.Tk()
    PDFHighlighter(root)
    root.mainloop()
